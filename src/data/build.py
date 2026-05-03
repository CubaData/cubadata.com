import json
import re
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

import pandas as pd
import yaml

SCRIPT_DIR = Path(__file__).resolve().parent
CONFIG_PATH = SCRIPT_DIR / "config.yaml"


def _spreadsheet_id(gsheet: str) -> str:
    m = re.search(r"/spreadsheets/d/([a-zA-Z0-9-_]+)", gsheet.strip())
    if not m:
        raise ValueError(f"Could not parse spreadsheet id from gsheet URL: {gsheet!r}")
    return m.group(1)


def _csv_url(sheet_id: str, gid: int | str) -> str:
    return f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv&gid={gid}"


def _parse_fields(fields_yaml: list) -> list[tuple[str, str]]:
    out: list[tuple[str, str]] = []
    for item in fields_yaml:
        if not isinstance(item, dict) or len(item) != 1:
            raise ValueError(f"Each field must be a single mapping, got: {item!r}")
        (name, typ), = item.items()
        out.append((str(name), str(typ)))
    return out


def _cell_empty(v) -> bool:
    if v is None:
        return True
    try:
        if pd.isna(v):
            return True
    except TypeError:
        pass
    if isinstance(v, str) and v.strip() == "":
        return True
    return False


def _parse_date(s: str) -> str:
    s = s.strip()
    for fmt in ("%Y-%m-%d", "%m/%d/%Y", "%d/%m/%Y"):
        try:
            return datetime.strptime(s, fmt).date().isoformat()
        except ValueError:
            continue
    try:
        return datetime.strptime(s, "%Y-%m").date().isoformat()
    except ValueError:
        pass
    raise ValueError(f"not a valid date: {s!r}")


def _parse_int(v) -> int:
    if isinstance(v, bool):
        raise ValueError(f"expected integer, got boolean: {v!r}")
    if isinstance(v, int) and not isinstance(v, bool):
        return v
    if isinstance(v, float):
        if v != int(v):
            raise ValueError(f"expected integer, got non-whole float: {v!r}")
        return int(v)
    s = str(v).strip()
    if s == "":
        raise ValueError("expected integer, got empty")
    try:
        n = float(s)
    except ValueError as e:
        raise ValueError(f"expected integer, got {v!r}") from e
    if n != int(n):
        raise ValueError(f"expected integer, got non-whole number: {v!r}")
    return int(n)


def _parse_url(s: str) -> str:
    s = s.strip()
    u = urlparse(s)
    if u.scheme not in ("http", "https") or not u.netloc:
        raise ValueError(f"not a valid http(s) URL: {s!r}")
    return s


def _parse_list(s: str) -> list[str]:
    parts = [p.strip() for p in s.split(",")]
    parts = [p for p in parts if p != ""]
    return parts


def coerce_field(name: str, raw, typ: str, *, row_label: str):
    if _cell_empty(raw):
        return None
    try:
        if typ == "string":
            return str(raw).strip()
        if typ == "date":
            return _parse_date(str(raw))
        if typ == "int":
            return _parse_int(raw)
        if typ == "url":
            return _parse_url(str(raw))
        if typ == "list":
            lst = _parse_list(str(raw))
            return lst if lst else None
    except ValueError as e:
        raise ValueError(f"{row_label} field {name!r} ({typ}): {e}") from e
    raise ValueError(f"{row_label} field {name!r}: unknown type {typ!r}")


def tab_to_records(df: pd.DataFrame, fields: list[tuple[str, str]], *, tab_gid) -> list[dict]:
    rows_out: list[dict] = []
    for i, row in df.iterrows():
        row_label = f"tab gid={tab_gid} data row {i + 2}"
        record = {}
        for name, typ in fields:
            if name not in df.columns:
                record[name] = None
                continue
            raw = row[name]
            record[name] = coerce_field(name, raw, typ, row_label=row_label)
        rows_out.append(record)
    return rows_out


def main():
    with open(CONFIG_PATH, encoding="utf-8") as f:
        cfg = yaml.safe_load(f)

    gsheet = cfg["gsheet"]
    sheet_id = _spreadsheet_id(gsheet)

    for tab in cfg["tabs"]:
        gid = tab["gid"]
        export_name = tab["export"]
        fields = _parse_fields(tab["fields"])

        url = _csv_url(sheet_id, gid)
        df = pd.read_csv(url, dtype=object)

        records = tab_to_records(df, fields, tab_gid=gid)

        out_path = SCRIPT_DIR / export_name
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(records, f, ensure_ascii=False, indent=2)

        print(f"Wrote {len(records)} rows -> {out_path}")


if __name__ == "__main__":
    main()

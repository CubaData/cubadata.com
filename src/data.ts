export type Category = 'encuestas' | 'estudios'

export type Post = {
  slug: string
  title: string
  category: Category
  author?: string
  date: string
  excerpt: string
  image: string
  cover?: string
  body?: string[]
}

export const posts: Post[] = [
  {
    slug: 'condiciones-de-vida-servicios-seguridad-y-ajuste-cotidiano',
    title: 'Condiciones de vida, servicios, seguridad y ajuste cotidiano',
    category: 'encuestas',
    author: 'salvi',
    date: '15 de abril de 2026',
    excerpt:
      'Esta encuesta se realizó a una muestra de 1,788 personas localizadas a través de todo el territorio geográfico de Cuba desde el 23 de febrero de 2026 al 13 de marzo del 2026.',
    image: '/images/post/condiciones-card.jpg',
    cover: '/images/post/condiciones-cover.png',
    body: [
      'Esta encuesta se realizó a una muestra de 1,788 personas localizadas a través de todo el territorio geográfico de Cuba desde el 23 de febrero de 2026 al 13 de marzo del 2026, con el objetivo de entender cómo viven los cubanos la situación actual en su hogar y en su entorno en medio de la crisis, así como las medidas para sobrellevar los problemas diarios.',
      'Esta es la primera de una serie de encuestas realizadas para Diario de Cuba.',
    ],
  },
  {
    slug: 'futuro-en-cuba-y-experiencia-con-venezuela',
    title: 'Horizontes de futuro en Cuba y experiencia comparada con Venezuela',
    category: 'encuestas',
    author: 'salvi',
    date: '21 de febrero de 2026',
    excerpt:
      'Esta encuesta se realizó a una muestra de 2,138 personas localizadas a través de todo el territorio geográfico de Cuba desde el 15 de enero de 2026.',
    image: '/images/post/futuro-card.jpg',
  },
  {
    slug: 'encuestas-del-segundo-panel-multidimensional',
    title: 'Encuestas del segundo panel multidimensional 2023-2024',
    category: 'encuestas',
    author: 'Cubadata',
    date: '2 de septiembre de 2024',
    excerpt:
      'El segundo panel de Cubadata proporciona una visión multidimensional de 360°, lo que permite visualizar cómo se interrelacionan diversos aspectos personales, sociales, económicos, políticos y culturales.',
    image: '/images/post/segundo-panel-card.jpg',
  },
  {
    slug: 'encuesta-sobre-protestas-civiles-en-cuba',
    title: 'Encuesta sobre protestas civiles en Cuba',
    category: 'encuestas',
    date: '25 de abril de 2024',
    excerpt: 'Encuesta sobre protestas civiles en Cuba.',
    image: '/images/post/protestas.jpg',
  },
  {
    slug: 'tercera-encuesta-economica-trimestral-2023',
    title: 'Tercera encuesta económica trimestral (2023)',
    category: 'encuestas',
    date: '6 de diciembre de 2023',
    excerpt: 'Tercera encuesta económica trimestral (2023)',
    image: '/images/post/tercera-economia.jpg',
  },
  {
    slug: 'segunda-encuesta-economica-trimestral-2023',
    title: 'Segunda encuesta económica trimestral (2023)',
    category: 'encuestas',
    date: '7 de agosto de 2023',
    excerpt: 'Segunda económica trimestral Cuba 2023',
    image: '/images/post/segunda-economia.jpg',
  },
  {
    slug: '2025-disidencia-en-cuba',
    title:
      'Más allá del miedo: ¿Qué está cambiando cuando nada parece cambiar? Un estudio de 360° sobre la disidencia latente en Cuba.',
    category: 'estudios',
    author: 'Cubadata',
    date: '3 de noviembre de 2025',
    excerpt:
      'Este estudio analiza los resultados de cinco encuestas realizadas por Cubadata entre septiembre de 2024 y enero de 2025, con una muestra panel de 1,658 personas.',
    image: '/images/post/miedo-card.jpg',
  },
  {
    slug: 'segundo-panel-multidimensional',
    title: 'Explorando futuros posibles para la democratización en Cuba. Segundo panel multidimensional',
    category: 'estudios',
    author: 'Cubadata',
    date: '2 de septiembre de 2024',
    excerpt:
      'El segundo panel de Cubadata proporciona una visión multidimensional de 360°, lo que permite visualizar cómo se interrelacionan diversos aspectos personales, sociales, económicos, políticos y culturales.',
    image: '/images/post/segundo-panel-card.jpg',
  },
  {
    slug: 'igualdad-de-genero-y-participacion-politica-de-las-mujeres-en-cuba',
    title: 'Igualdad de género y participación política de las mujeres en Cuba: desafíos y realidades ocultas',
    category: 'estudios',
    author: 'Cubadata',
    date: '31 de julio de 2023',
    excerpt:
      'Estudio: Igualdad de género y participación política de las mujeres en Cuba: desafíos y realidades ocultas',
    image: '/images/post/genero.jpg',
  },
  {
    slug: 'politica-derechos-y-calidad-de-vida-en-cuba',
    title: 'Política, derechos y calidad de vida en Cuba: Primer panel multimensional 2022',
    category: 'estudios',
    date: '28 de junio de 2023',
    excerpt: 'Política, derechos y calidad de vida en Cuba Primer panel multimensional 2022',
    image: '/images/post/segundo-panel-card.jpg',
  },
  {
    slug: 'el-rol-de-la-economia-informal-en-la-mitigacion-de-la-inseguridad-alimentaria-en-cuba',
    title: 'El rol de la economía informal en la mitigación de la inseguridad alimentaria en Cuba',
    category: 'estudios',
    date: '15 de mayo de 2023',
    excerpt: 'El rol de la economía informal en la mitigación de la inseguridad alimentaria en Cuba',
    image: '/images/post/miedo-card.jpg',
  },
  {
    slug: 'que-hay-detras-de-la-intencion-de-voto-del-electorado-cubano',
    title: '¿Qué hay detrás de la intención de voto del electorado cubano?',
    category: 'estudios',
    date: '7 de abril de 2023',
    excerpt:
      'Los motivos por los cuales los cubanos y cubanas podrían votar en las elecciones de su país varían según sus percepciones y experiencias políticas.',
    image: '/images/post/genero.jpg',
  },
]

export const pressItems = [
  {
    title: 'Comida, corriente y libertad: la protesta ciudadana se reactiva en Cuba',
    outlet: 'El País',
    domain: 'elpais.com',
    image: '/images/media/el-pais.jpg',
    url: 'https://elpais.com/america/2024-03-25/comida-corriente-y-libertad-la-protesta-ciudadana-se-reactiva-en-cuba.html',
  },
  {
    title: 'Crise alimentar de Cuba obriga população a reduzir refeições diárias',
    outlet: 'Gazeta do Povo',
    domain: 'gazetadopovo.com.br',
    image: '/images/media/gazeta.png',
    url: 'https://www.gazetadopovo.com.br/mundo/crise-alimentar-de-cuba-obriga-populacao-a-reduzir-refeicoes-diarias/',
  },
  {
    title: 'Libertad de expresión en Cuba. Percepción pública y ejercicio contra estatal',
    outlet: 'Animal Político',
    domain: 'animalpolitico.com',
    image: '/images/media/animal.jpg',
    url: 'https://animalpolitico.com/analisis/organizaciones/altoparlante/protestas-libertad-de-expresion-cuba',
  },
  {
    title: "Poco cibo, nessun futuro. Sei cubani su 10 vogliono lasciare l'isola",
    outlet: 'ilGiornale.it',
    domain: 'ilgiornale.it',
    image: '/images/media/ilgiornale.png',
    url: 'https://www.ilgiornale.it/news/cronaca-internazionale/poco-cibo-nessun-futuro-sei-cubani-su-10-vogliono-lasciare-2190881.html',
  },
  {
    title: 'Abstencionismo y puesta en escena electoral en Cuba: el fin de la credibilidad',
    outlet: 'Infobae',
    domain: 'infobae.com',
    image: '/images/media/infobae.jpg',
    url: 'https://www.infobae.com/america/opinion/2023/03/23/abstencionismo-y-puesta-en-escena-electoral-en-cuba-el-fin-de-la-credibilidad/',
  },
  {
    title: 'Cuba vota renovación de Asamblea Nacional; Díaz-Canel cree en reelección',
    outlet: 'Milenio',
    domain: 'milenio.com',
    image: '/images/media/milenio.jpg',
    url: 'https://www.milenio.com/internacional/cuba-vota-renovacion-asamblea-nacional',
  },
]

export const advisors = [
  ['Octavio Mercado', 'UAM, México', '/images/person/octavio.jpeg'],
  ['Ileana Diéguez', 'UAM, México', '/images/person/ileana.jpg'],
  ['Elaine Acosta González', 'Florida International University', '/images/person/elaine.webp'],
  ['Yanko Moyano', 'Universitat de Barcelona', '/images/person/yanko.jpg'],
  ['Rubén Chababo', 'Universidad Nacional de Rosario', '/images/person/ruben.jpg'],
  ['Gonçal Mayos', 'Universitat de Barcelona', '/images/person/goncal.jpg'],
] as const

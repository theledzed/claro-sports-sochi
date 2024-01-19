interface Copies {
  title: string
  description: string
}

interface Event {
  src: string
  title: string
  youtubeId: string
  videoId: number
}

export const copies: Copies = {
  title: 'CLARO SPORTS EN SOCHI 2014',
  description: 'Los Deportistas latinoamericanos que participan en Sochi 2014.'
}

export const events: Event[] = [
  {
    videoId: 1,
    src: '/team-latam.png',
    title: 'TEAM LATAM',
    youtubeId: 'peuVFBTt47o?si=qGLXgwfCzisi3JDK'
  },
  {
    videoId: 2,
    src: '/travel-meets-fashion.png',
    title: 'TRAVEL MEETS FASHION',
    youtubeId: 'UomdFp8DNys?si=I7HhspT-vh5tJqQh'
  },
  {
    videoId: 3,
    src: '/velocidad-riesgo.png',
    title: 'VELOCIDAD Y RIESGO',
    youtubeId: 'hsRYUdPwJtY?si=DZR9j_uKMVI4VSo7'
  },
  {
    videoId: 4,
    src: '/experiencia.png',
    title: 'EXPERIENCIA MULTIMEDIA',
    youtubeId: 'o3SftJsjrSI?si=lyvnaz3ZHri3IOld'
  }
]

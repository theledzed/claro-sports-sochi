interface Copies {
  title: string
}

interface Event {
  src: string
  title: string
  youtubeId: string
}

export const copies: Copies = {
  title: 'CLARO SPORTS EN SOCHI 2014'
}

export const events: Event[] = [
  {
    src: '/team-latam.png',
    title: 'TEAM LATAM',
    youtubeId: 'peuVFBTt47o?si=qGLXgwfCzisi3JDK'
  },
  {
    src: '/travel-meets-fashion.png',
    title: 'TRAVEL MEETS FASHION',
    youtubeId: 'UomdFp8DNys?si=I7HhspT-vh5tJqQh'
  },
  {
    src: '/velocidad-riesgo.png',
    title: 'VELOCIDAD Y RIESGO',
    youtubeId: 'hsRYUdPwJtY?si=DZR9j_uKMVI4VSo7'
  },
  {
    src: '/experiencia.png',
    title: 'EXPERIENCIA MULTIMEDIA',
    youtubeId: 'o3SftJsjrSI?si=lyvnaz3ZHri3IOld'
  }
]

import { useLayoutEffect, useState } from 'react'

interface SCreenSize {
  width: number
  height: number
}

const useScreenSize = (): SCreenSize => {
  const [width, setWidth] = useState(1440)
  const [height, setHeight] = useState(2000)

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = (): void => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return { width, height }
}

export default useScreenSize

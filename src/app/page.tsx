'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Navbar from '@/sections/Navbar'
import Welcome from '@/sections/Welcome'
import { setState } from '@/redux/features/stateSlice'
import { useEffect } from 'react'
import useScreenSize from '@/hooks/useScreenSize'

export default function Home(): JSX.Element {
  const { width } = useScreenSize()
  const state = useAppSelector((state) => state.stateReducer)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (width > 1300 && state.windowType !== 'web') {
      dispatch(setState({ windowType: 'web' }))
    } else if (width < 1301 && width > 801 && state.windowType !== 'tablet') {
      dispatch(setState({ windowType: 'tablet' }))
    } else if (width < 801 && state.windowType !== 'mobile') {
      dispatch(setState({ windowType: 'mobile' }))
    }
  }, [width])

  return (
    <>
      <Navbar />
      <Welcome />
    </>
  )
}

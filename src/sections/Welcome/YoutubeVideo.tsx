'use client'
import styled, { keyframes } from 'styled-components'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect, useRef } from 'react'
import { Spin } from 'antd'
import YouTube from 'react-youtube'
import { setState } from '@/redux/features/stateSlice'

const scale = keyframes`
  from {
    scale: 0;
  }
  to { 
    scale: 1;
  }
`

const YoutubeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;
  min-height: 400px;
  animation-name: ${scale};
  animation-duration: 5s;
`

export default function YoutubeVideo(): JSX.Element {
  const ref = useRef(null)
  const state = useAppSelector((state) => state.stateReducer)
  const { youtubeId, loading, windowType } = state
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setState({ videoRef: ref }))
  }, [ref])

  return (
    <YoutubeContainer ref={ref}>
      {loading ? (
        <Spin size="large" />
      ) : (
        <YouTube
          opts={{
            height: windowType === 'mobile' ? '300' : '390',
            width: windowType === 'mobile' ? '400' : '640',
            playerVars: {
              autoplay: 1
            }
          }}
          videoId={youtubeId}
        />
      )}
    </YoutubeContainer>
  )
}

'use client'
import { copies, events } from '@/sections/AllEvents/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import AllEventsContainer from '@/sections/AllEvents/AllEventsContainer'
import AnimatedContainer from '@/sections/AllEvents/AnimatedContainer'
import Event from '@/coreComponents/Event'
import EventsSectionContainer from '@/sections/AllEvents/EventsSectionContainer'
import GraySeparator from '@/sections/AllEvents/GraySeparator'
import React from 'react'
import TitleSportsList from '@/sections/AllEvents/TitleSportsList'
import VideoSelector from '@/sections/AllEvents/VideoSelector'
import VideoSelectorContainer from '@/sections/AllEvents/VideoSelectorContainer'
import { setState } from '@/redux/features/stateSlice'

export default function AllEvents(): JSX.Element {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.stateReducer)
  const { videoRef = React.useRef<HTMLInputElement>(null), selectedVideoId } =
    state

  const onChangeVideo = (youtubeId: string, selectedVideoId: number): any => {
    videoRef?.current?.scrollIntoView({ behavior: 'smooth' })
    dispatch(setState({ youtubeId, loading: true, selectedVideoId }))
    setTimeout(() => {
      dispatch(setState({ loading: false }))
    }, 2000)
  }

  return (
    <>
      <EventsSectionContainer>
        <TitleSportsList>{copies.title}</TitleSportsList>
        <AllEventsContainer>
          {events.map((event) => {
            return (
              <AnimatedContainer key={event.src}>
                {selectedVideoId === event.videoId ? (
                  <VideoSelectorContainer>
                    <VideoSelector>{copies.description}</VideoSelector>
                    <span>{event.title}</span>
                  </VideoSelectorContainer>
                ) : (
                  <div
                    onClick={() => {
                      onChangeVideo(event.youtubeId, event.videoId)
                    }}
                  >
                    <Event src={event.src} title={event.title} />
                  </div>
                )}
              </AnimatedContainer>
            )
          })}
        </AllEventsContainer>
        <GraySeparator />
      </EventsSectionContainer>
    </>
  )
}

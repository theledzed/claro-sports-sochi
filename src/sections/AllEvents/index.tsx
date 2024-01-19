'use client'
import { copies, events } from '@/sections/AllEvents/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import AllEventsContainer from '@/sections/AllEvents/AllEventsContainer'
import Event from '@/coreComponents/Event'
import EventsSectionContainer from '@/sections/AllEvents/EventsSectionContainer'
import GraySeparator from '@/sections/AllEvents/GraySeparator'
import TitleSportsList from '@/sections/AllEvents/TitleSportsList'
import { setState } from '@/redux/features/stateSlice'

export default function AllEvents(): JSX.Element {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.stateReducer)
  const { videoRef } = state

  const onChangeVideo = (youtubeId: string): any => {
    videoRef?.current?.scrollIntoView({ behavior: 'smooth' })
    dispatch(setState({ youtubeId, loading: true }))
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
              <div
                onClick={() => {
                  onChangeVideo(event.youtubeId)
                }}
                key={event.src}
              >
                <Event src={event.src} title={event.title} />
              </div>
            )
          })}
        </AllEventsContainer>
        <GraySeparator />
      </EventsSectionContainer>
    </>
  )
}

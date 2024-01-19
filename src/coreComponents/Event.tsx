'use client'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import { useAppSelector } from '@/redux/hooks'

const reveal = keyframes`
  from {
    opacity: 0;
    translate: 0 100px;
    scale: .5;
  }
  to { 
    opacity: 1;
    translate: 0 0px;
    scale: 1;
  }
`

const scale = keyframes`
  from {
    scale: 0;
  }
  to { 
    scale: 1;
  }
`

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0em 2em;
  img {
    cursor: pointer;
  }
  @media (min-width: 1201px) {
    animation-name: ${scale};
    animation-duration: 5s;
  }
  @media (max-width: 1200px) {
    width: 328px;
    padding: 0px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 1em;
    animation: ${reveal} linear both;
    animation-timeline: view();
    animation-range: entry 20% cover 50%;
  }
  &:hover {
    scale: 1.1;
    cursor: pointer;
  }
`

const Title = styled.span`
  margin-bottom: 8px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  @media (max-width: 800px) {
    text-align: left;
    font-size: 20px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1201px) {
    animation-name: ${scale};
    animation-duration: 5s;
  }
`

interface Props {
  title: string
  src: string
}

export default function Event({ title, src }: Props): JSX.Element {
  const state = useAppSelector((state) => state.stateReducer)
  const { windowType } = state
  return (
    <>
      <EventContainer>
        <Image
          alt="integration"
          src={src}
          width={windowType === 'tablet' ? 150 : 250}
          height={windowType === 'tablet' ? 150 : 250}
        />
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>
      </EventContainer>
    </>
  )
}

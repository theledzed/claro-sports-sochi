'use client'
import AllEvents from '@/sections/AllEvents'
import CountDownItem from '@/sections/Welcome/CountDownItem'
import Countdown from 'react-countdown'
import CountdownContainer from '@/sections/Welcome/CountdownContainer'
import Footer from '@/sections/Footer'
import WelcomeContainer from '@/sections/Welcome/WelcomeContainer'
import WelcomeTitle from '@/sections/Welcome/WelcomeTitle'
import YoutubeVideo from '@/sections/Welcome/YoutubeVideo'
import { copies } from '@/sections/Welcome/utils'

export default function Welcome(): JSX.Element {
  interface countProps {
    formatted: {
      days: string
      hours: string
      minutes: string
      seconds: string
    }
  }

  const renderer = ({ formatted }: countProps): JSX.Element => {
    return (
      <CountdownContainer>
        <CountDownItem>
          <span>{formatted.days}</span> <p>{copies.days}</p>
        </CountDownItem>
        <CountDownItem>
          <span>{formatted.hours}</span> <p>{copies.hours}</p>
        </CountDownItem>
        <CountDownItem>
          <span>{formatted.minutes}</span> <p>{copies.minutes}</p>
        </CountDownItem>
        <CountDownItem>
          <span>{formatted.seconds}</span> <p>{copies.seconds}</p>
        </CountDownItem>
      </CountdownContainer>
    )
  }

  return (
    <>
      <WelcomeContainer>
        <WelcomeTitle>{copies.missing}</WelcomeTitle>
        <Countdown date={new Date('2024-12-31T23:59:59')} renderer={renderer} />
        <YoutubeVideo />
        <AllEvents />
        <Footer />
      </WelcomeContainer>
    </>
  )
}

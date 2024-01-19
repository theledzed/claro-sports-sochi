'use client'
import FooterMsgsContainer from '@/sections/Footer/FooterMsgsContainer'
import FooterSectionContainer from '@/sections/Footer/FooterSectionContainer'
import Image from 'next/image'
import Msg from '@/sections/Footer/Msg'
import { copies } from '@/sections/Footer/utils'
import styled from 'styled-components'

const FooterImage = styled(Image)`
  @media (max-width: 800px) {
    margin-top: 2em;
  }
`

export default function Footer(): JSX.Element {
  return (
    <>
      <FooterSectionContainer>
        <FooterMsgsContainer>
          <Msg>{copies.privacyTerms}</Msg>
          <Msg>{copies.contact}</Msg>
        </FooterMsgsContainer>
        <FooterImage
          src="/logo-sochi-color.png"
          alt="RegiM"
          quality="100"
          height={60}
          width={140}
        />
        <FooterImage
          src="/social-apps.png"
          alt="RegiM"
          quality="100"
          height={35}
          width={150}
        />
      </FooterSectionContainer>
    </>
  )
}

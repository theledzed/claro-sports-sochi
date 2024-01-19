'use client'
import Image from 'next/image'
import NavbarContainer from '@/sections/Navbar/NavbarContainer'
import ProgressBar from '@/sections/Navbar/ProgressBar'
import RedSeparator from '@/sections/Navbar/RedSeparator'

export default function Navbar(): JSX.Element {
  return (
    <>
      <ProgressBar />
      <NavbarContainer>
        <Image
          src="/logo-sochi-color.png"
          alt="RegiM"
          quality="100"
          height={50}
          width={130}
        />
        <Image
          src="/logo-claro-sports.png"
          alt="RegiM"
          quality="100"
          height={50}
          width={130}
        />
      </NavbarContainer>
      <RedSeparator />
    </>
  )
}

import styled, { keyframes } from 'styled-components'

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

const AnimatedContainer = styled.div`
  @media (min-width: 1201px) {
    animation-name: ${scale};
    animation-duration: 5s;
  }

  @media (max-width: 800px) {
    animation: ${reveal} linear both;
    animation-timeline: view();
    animation-range: entry 20% cover 50%;
  }
`

export default AnimatedContainer

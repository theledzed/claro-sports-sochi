import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from {
    scale: 0;
  }
  to { 
    scale: 1;
  }
`

const WelcomeTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  color: #fff;
  padding: 0;
  animation-name: ${scale};
  animation-duration: 1s;
`
export default WelcomeTitle

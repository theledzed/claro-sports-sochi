import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from {
    scale: 0;
  }
  to { 
    scale: 1;
  }
`

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1.5em;
  animation-name: ${scale};
  animation-duration: 3s;
`
export default CountdownContainer

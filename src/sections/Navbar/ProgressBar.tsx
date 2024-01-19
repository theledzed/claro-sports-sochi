import styled, { keyframes } from 'styled-components'

const progress = keyframes`
  from { width: 0%}
  to {width: 100%}
`

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  width: 0%;
  background: #e62109;
  height: 0.5em;
  z-index: 3;
  animation: ${progress} auto linear;
  animation-timeline: scroll(root block);
  border-radius: 0px 8px 8px 0px;
`

export default ProgressBar

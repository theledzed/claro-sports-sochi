import styled from 'styled-components'

const VideoSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5em;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 1em;
  }

  span {
    margin-top: 1em;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 32px;
  }
`

export default VideoSelectorContainer

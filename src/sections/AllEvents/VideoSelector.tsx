import styled from 'styled-components'

const VideoSelector = styled.div`
  width: 220px;
  height: 225px;
  border-radius: 50%;
  background-color: #e82100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 1301px) {
    width: 140px;
    height: 140px;
    font-size: 13px;
  }
  @media (max-width: 800px) {
    width: 220px;
    height: 225px;
    font-size: 20px;
  }
`

export default VideoSelector

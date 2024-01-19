import styled from 'styled-components'

const WelcomeContainer = styled.div`
  display: flex;
  padding: 32px 112px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #030305;
  z-index: 2;
  background-image: url('/background.jpg');
  background-position: top;
  background-repeat: no-repeat;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 80px 40px 80px;
  }
  @media (min-width: 1220px) {
    align-items: center;
  }
  @media (min-width: 2220px) {
    justify-content: space-evenly;
  }
  @media (max-width: 800px) {
    padding: 20px 20px 80px;
  }
`
export default WelcomeContainer

import styled from 'styled-components'

const EventsSectionContainer = styled.div`
  display: flex;
  margin: 3em 5em;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background-color: #232323;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 96px 40px;
  }
  @media (max-width: 800px) {
    padding: 48px 20px;
  }
`

export default EventsSectionContainer

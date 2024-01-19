import styled from 'styled-components'

const AllEventsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export default AllEventsContainer

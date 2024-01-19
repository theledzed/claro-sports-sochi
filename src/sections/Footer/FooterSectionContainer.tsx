import styled from 'styled-components'

const FooterSectionContainer = styled.div`
  display: flex;
  padding: 0px 0px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #030305;
  width: 100%;
  margin-bottom: 2em;
  @media (max-width: 1200px) {
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: space-evenly;
    margin-bottom: 1em;
  }
`

export default FooterSectionContainer

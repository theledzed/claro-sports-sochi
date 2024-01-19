import styled from 'styled-components'

const FooterMsgsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default FooterMsgsContainer

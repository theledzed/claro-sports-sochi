import styled from 'styled-components'

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10em;
  z-index: 2;
  background-color: #030305;
  @media (max-width: 1200px) {
    padding: 20px 40px;
  }
  @media (max-width: 800px) {
    align-items: center;
    padding: 20px;
  }
`
export default NavbarContainer

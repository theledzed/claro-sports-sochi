import styled from 'styled-components'

const CountDownItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  color: #fff;
  span {
    font-size: 20px;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 12px;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
`
export default CountDownItem

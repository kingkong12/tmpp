import styled from 'styled-components'

// ROOT FILE
function App() {
  return (
    <>
      <div>
        <StyledButton onClick={() => {}}>count is</StyledButton>
      </div>
    </>
  )
}

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

export default App

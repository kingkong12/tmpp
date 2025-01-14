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
  background-color: ${({ theme }) => theme?.colors?.primary ?? 'red'};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme?.colors?.primary ?? 'red'};
  }
`

export default App

import styled from 'styled-components'

// Wrapper for the entire checkbox and label
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
`

// Hidden default checkbox input
export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`

// Custom checkbox square with tick mark
export const Icon = styled.span<{ checked: boolean }>`
  width: 24px; /* Adjust size as needed */
  height: 24px;
  border: 2px solid ${({ theme }) => theme.colors.secondary || '#666'};
  border-radius: 6px; /* Slightly rounded corners */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.background || '#fff' : 'transparent'};
  transition: all 0.3s ease;

  img {
    width: 16px;
    height: 16px;
    display: ${({ checked }) =>
      checked ? 'block' : 'none'}; /* Show tick only if checked */
  }
`

// Label for the checkbox
export const Label = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text || '#000'};
  cursor: pointer;
`

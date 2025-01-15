import styled from 'styled-components'

// Wrapper for the entire checkbox and label
export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  cursor: pointer; /* Ensure the cursor changes to pointer */
`

// Hidden default checkbox input
export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  z-index: 1;
`

// Custom checkbox square with tick mark
export const Icon = styled.span<{ checked: boolean }>`
  width: 1.5rem; /* 24px */
  height: 1.5rem; /* 24px */
  border: 0.07875rem solid
    ${({ theme }) => theme.colors.chineseSilver || '#ccc'}; /* 1.26px */
  border-radius: 0.158125rem; /* 2.53px */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 1rem; /* 16px */
    height: 1rem; /* 16px */
    display: ${({ checked }) =>
      checked ? 'block' : 'none'}; /* Show tick only if checked */
  }
`

// Label for the checkbox
export const Label = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.static.blackCoffee || '#000'};
  cursor: pointer;
`

import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
`

export const InputIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.secondary || '#ccc'};
  border-radius: 4px;
  padding-right: 2.5rem; /* Reserve space for the icon */
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary || '#D2691E'};
  }
`

export const Icon = styled.div`
  position: absolute;
  right: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 21px; /* Adjust size as needed */
    height: 12px;
    pointer-events: none;
  }
`

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  padding-right: 2.5rem; /* Prevent input text from overlapping icon */
  width: 100%;
`

export const Label = styled.label<{ isFocused: boolean }>`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? '-0.6rem' : '50%')};
  left: 1rem;
  transform: translateY(${({ isFocused }) => (isFocused ? '0' : '-50%')});
  font-size: ${({ isFocused }) => (isFocused ? '0.8rem' : '1rem')};
  color: ${({ isFocused, theme }) =>
    isFocused
      ? theme.colors.primary || '#D2691E'
      : theme.colors.secondary || '#666'};
  transition: all 0.3s ease;
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.background || '#fff'};
  padding: 0 0.2rem;
`

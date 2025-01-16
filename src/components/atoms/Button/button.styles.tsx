import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary || '#f57c20'};
  color: ${({ theme }) => theme.colors.text || '#fff'};
  font-size: 1.2rem;
  line-height: 1.3125rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.20625rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 9.125rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary || '#e56c1a'};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.blackShade || '#d65c14'};
  }

  &:focus {
    outline: 0.125rem solid ${({ theme }) => theme.colors.text || '#fff'};
    outline-offset: 0.125rem;
  }
`

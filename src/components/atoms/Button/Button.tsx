// Button.tsx
import React from 'react'
import styled from 'styled-components'

// Styled Button Component
const StyledButton = styled.button`
  background-color: #f57c20; /* Orange background */
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.3125rem; /* 21px */
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.20625rem; /* 3.3px */
  cursor: pointer;
  transition: all 0.3s ease;

  max-width: 9.125rem; /* 146px */

  &:hover {
    background-color: #e56c1a; /* Slightly darker on hover */
  }

  &:active {
    background-color: #d65c14; /* Even darker when clicked */
  }

  &:focus {
    outline: 0.125rem solid #fff; /* 2px */
    outline-offset: 0.125rem; /* 2px */
  }
`

interface ButtonProps {
  text: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default Button

// Button.tsx
import React from 'react'
import styled from 'styled-components'

// Styled Button Component
const StyledButton = styled.button`
  background-color: #f57c20; /* Orange background */
  color: #fff; /* White text */
  font-size: 1.2rem; /* Font size */
  padding: 0.8rem 1.5rem; /* Padding */
  border: none; /* Remove default border */
  border-radius: 8px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: all 0.3s ease; /* Smooth transition */

  &:hover {
    background-color: #e56c1a; /* Slightly darker on hover */
  }

  &:active {
    background-color: #d65c14; /* Even darker when clicked */
  }

  &:focus {
    outline: 2px solid #fff; /* Add focus ring for accessibility */
    outline-offset: 2px;
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

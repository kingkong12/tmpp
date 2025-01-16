import React from 'react'
import { CheckboxWrapper, StyledCheckbox, Label, Icon } from './checkbox.styles'
import tickMark from '../../../assets/svg/mark.svg' // Import the SVG file for the tick mark

interface CheckboxProps {
  id: string
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault()
      onChange(!checked)
    }
  }

  return (
    <CheckboxWrapper>
      <StyledCheckbox
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-checked={checked}
        role="checkbox"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      />

      <Icon checked={checked}>
        {checked && <img src={tickMark} alt="Checked" />}
      </Icon>

      <Label htmlFor={id}>{label}</Label>
    </CheckboxWrapper>
  )
}

export default Checkbox

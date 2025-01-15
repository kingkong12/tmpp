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
  return (
    <CheckboxWrapper>
      {/* Associate label with the input via htmlFor */}
      <Label htmlFor={id}>{label}</Label>

      {/* Add aria-checked and role for screen readers */}
      <StyledCheckbox
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-checked={checked}
        role="checkbox"
      />

      {/* Visual indicator */}
      <Icon checked={checked}>
        {checked && <img src={tickMark} alt="Checked" />}
      </Icon>
    </CheckboxWrapper>
  )
}

export default Checkbox

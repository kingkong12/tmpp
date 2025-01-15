import { useState } from 'react'
import {
  InputWrapper,
  Input,
  Label,
  InputIconWrapper,
  Icon,
} from './textField.styles'
import eyeIcon from '../../../assets/svg/eyeIcon.svg'
import eyeShow from '../../../assets/svg/eyeShow.svg'

interface InputFieldProps {
  id?: string
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  errorMessage?: string
}

const TextField: React.FC<InputFieldProps> = ({
  id,
  label = `label`,
  type = 'password', // Default to password type
  placeholder = '',
  required = false,
  errorMessage = '',
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleIconClick = () => {
    if (type === 'password') {
      setIsPasswordVisible(!isPasswordVisible)
    }
  }

  return (
    <InputWrapper>
      <InputIconWrapper>
        <Input
          id={id}
          type={isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-describedby={`${id}-error`}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== '')}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        {type === 'password' && (
          <Icon
            onClick={handleIconClick}
            role="button"
            aria-label="Toggle password visibility"
          >
            <img
              src={isPasswordVisible ? eyeIcon : eyeShow}
              alt="Toggle visibility"
            />
          </Icon>
        )}
      </InputIconWrapper>
      <Label htmlFor={id} isFocused={isFocused || value !== ''}>
        {label}
        {required && ' *'}
      </Label>
    </InputWrapper>
  )
}

export default TextField

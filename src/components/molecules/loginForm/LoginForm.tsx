import { useState } from 'react'
import { Button, Checkbox, TextField } from '../../atoms'
import styled from 'styled-components'

export default function LoginForm() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container>
      <TextField type="text" />
      <TextField />
      <Checkbox
        id="remember-me"
        label="Remember me"
        checked={isChecked}
        onChange={(checked) => setIsChecked(checked)}
      />
      <Button
        text={'Submit'}
        onClick={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </Container>
  )
}

export const Container = styled.div``

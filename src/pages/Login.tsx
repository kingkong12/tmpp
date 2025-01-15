import styled from 'styled-components'

import { LoginForm } from '../components/molecules'

export default function Login() {
  return (
    <Container>
      Login FORMc
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`

const FormWrapper = styled.div`
  //  Media query and spacing
`

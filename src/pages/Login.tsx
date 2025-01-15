import styled from 'styled-components'

import { LoginForm } from '../components/molecules'

export default function Login() {
  return (
    <Container>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* background-color: pink; */
  /* padding: 20px; */
  /* border: 1px solid #ccc;
  border-radius: 10px; */
`

const FormWrapper = styled.div`
  //  Media query and spacing
`

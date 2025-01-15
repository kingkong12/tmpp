import { useState } from 'react'
import { Button, Checkbox, TextField } from '../../atoms'
import styled from 'styled-components'
import { media } from '../../../utils/mediaQueries'
import Logosvg from '../../../assets/svg/logo.svg'
import Footer from '../../atoms/Footer/Footer'

export default function LoginForm() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container>
      <ImageWrapper>
        <img src={Logosvg} alt="Company Logo" />
      </ImageWrapper>

      <FormWrapper>
        <FormTitle>
          <p>USER LOGIN</p>
        </FormTitle>
        <TextField label="Business Email ID" type="text" />
        <TextField label="Password" />
        <Checkbox
          id="remember-me"
          label="Remember me"
          checked={isChecked}
          onChange={(checked) => setIsChecked(checked)}
        />
        <ForgotPasswordText>Don't remember your password ?</ForgotPasswordText>
        <ButtonWrapper>
          <Button
            text={'Submit'}
            onClick={function (): void {
              throw new Error('Function not implemented.')
            }}
          />
        </ButtonWrapper>
      </FormWrapper>
      <Footer />
      {/* <TextField /> */}
      {/*
      <Button
        text={'Submit'}
        onClick={function (): void {
          throw new Error('Function not implemented.')
        }}
      /> */}
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align content */
  justify-content: center; /* Center align content */
  height: 100%;
  min-width: 375px;

  box-shadow: 0px 1.92px 3.83px 0px rgba(0, 0, 0, 0.2879);
  ${media.smallLargeDesktop(`
    width: 310px;
    border-radius: 4px;
  `)}
  ${media.mobile(`
    // styles for mobile
  `)}
`
const ImageWrapper = styled.div`
  min-width: 220px; /* Adjust size as needed */
  padding: 20px 0px; /* Space between logo and form */
  margin-bottom: 4px;
  width: 100%;

  display: flex;
  align-items: center; /* Center align content */
  justify-content: center; /* Center align content */
  background-color: ${({ theme }) => theme.static.white || '#FFFFFF'};
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 26px;
  background-color: ${({ theme }) => theme.static.white || '#FFFFFF'};
  width: 100%;
  flex: 1; /* Ensure it takes the remaining height */
`

const FormTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.fontColor.primary || '#000000'};
  margin: 24px 0px 16px 0px;
`

export const ForgotPasswordText = styled.p`
  font-family: 'Neue Haas Grotesk Display', Arial, sans-serif;
  font-weight: 450; /* Medium weight */
  font-size: 18.2px;
  line-height: 20.82px;
  color: ${({ theme }) => theme.static.blueShade || '#486082'}; /* Hex color */
  text-align: center;
  margin: 16px 0; /* Adjust margins as necessary */
  cursor: pointer; /* Adds pointer cursor for interactivity */
  transition: color 0.3s ease;
  padding-top: 2rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Align button to the bottom */
  margin-bottom: 10px;
`

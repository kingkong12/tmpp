import { useState } from 'react'
import { Button, Checkbox, TextField } from '../../atoms'
import styled from 'styled-components'
import { media } from '../../../utils/mediaQueries'
import Logosvg from '../../../assets/svg/logo.svg'
import Footer from '../../atoms/Footer/Footer'

const formTitle = 'USER LOGIN'
const forgotPasswordText = "Don't remember your password ?"

export default function LoginForm() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container>
      <ImageWrapper>
        <img src={Logosvg} alt="Company Logo" />
      </ImageWrapper>

      <FormWrapper>
        <FormTitle>
          <p>{formTitle}</p>
        </FormTitle>
        <TextField label="Business Email ID" type="text" />
        <TextField label="Password" />
        <Checkbox
          id="remember-me"
          label="Remember me"
          checked={isChecked}
          onChange={(checked) => setIsChecked(checked)}
        />
        <ForgotPasswordText>{forgotPasswordText}</ForgotPasswordText>
        <ButtonWrapper>
          <Button
            text={'Login'}
            onClick={function (): void {
              throw new Error('Function not implemented.')
            }}
          />
        </ButtonWrapper>
      </FormWrapper>

      <Footer />
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0.12rem 0.24rem 0px rgba(0, 0, 0, 0.2879);
  min-width: 100vw;
  height: 100%;

  ${media.minSmallLargeDesktop(`
    height: auto;
    min-width: 0;
    width: 19.375rem; 
  `)}

  ${media.minDesktop(`
    height: auto;
    min-width: 0;
    width: 21.76rem; 
  `)}

  ${media.minLargeDesktop(`
    height: auto;
    min-width: 0;
    width: 30.28rem; 
  `)}
`

const ImageWrapper = styled.div`
  min-width: 13.75rem;
  padding: 1.125rem 0 0.625rem 0;
  margin-bottom: 0.3125rem;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.static.white || '#FFFFFF'};

  > img {
    max-width: 16.63rem;

    ${media.minDesktop(`
      max-width: 9.08rem; 
    `)}

    ${media.minLargeDesktop(`
      max-width: 16.63rem; 
    `)}
  }
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  padding: 0rem 1.625rem;
  background-color: ${({ theme }) => theme.static.white || '#FFFFFF'};
  width: 100%;
  flex: 1;
`

const FormTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.fontColor.primary || '#000000'};
  margin: 1.625rem 0rem 2.25rem 0rem;
`

export const ForgotPasswordText = styled.button`
  font-weight: 450;
  font-size: 18.2px;
  line-height: 20.82px;

  color: ${({ theme }) => theme.static.blueShade || '#486082'}; /* Hex color */
  text-align: center;
  background: none;
  border: none;
  margin-top: 55px;
  cursor: pointer;
  transition: color 0.3s ease;

  ${media.minSmallLargeDesktop(`
  margin-top: 20px;
  font-size: 13.42px;
  line-height: 15.35px;
  `)}

  ${media.minDesktop(`
 
  font-size: 15.2px;
  line-height: 17.16px;
  `)}

  ${media.minLargeDesktop(`
   margin-top: 24px;
  font-size: 21.2px;
  line-height: 24.02px;
  `)}

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary || '#D2691E'};
  }
`

const ButtonWrapper = styled.div`
  flex: 1;
  margin-top: 74px;
  margin-bottom: 25px;
  display: flex;
  align-items: end;
  justify-content: center;

  ${media.minSmallLargeDesktop(`
  margin-top: 67.313px;
  `)}

  ${media.minDesktop(`
  margin-top: 88px;  
  `)}

  ${media.minLargeDesktop(`
  margin-top: 108.617px;
  `)}
`

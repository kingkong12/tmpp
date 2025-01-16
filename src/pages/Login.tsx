import styled from 'styled-components'
import { LoginForm } from '../components/molecules'
import IntroductionBanner from '../components/molecules/introductionBanner/IntroductionBanner'
import BannerImage from '../components/molecules/bannerImage/BannerImage'
import { media } from '../utils/mediaQueries'

export default function Login() {
  return (
    <Container>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>

      <TextContainer>
        <IntroductionBanner />
      </TextContainer>
      <ImageContainer>
        <BannerImage />
      </ImageContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* background-color: pink; */
  /* padding: 20px; */
  /* border: 1px solid #ccc;
  border-radius: 10px; */
`

const FormWrapper = styled.div`
  display: flex;
  /* width: 33.33%; */
  height: 100%; /* Ensure the form wrapper takes full height */
  justify-content: center;
  align-items: center;

  ${media.mobile(`
    height: 100vh; 
  `)}

  //1280
${media.minSmallLargeDesktop(`
    margin-left: 5%;
  `)}
`

const TextContainer = styled.div`
  margin-right: -13%; /* Use negative margin to overlap with ImageContainer */
  z-index: 1; /* Ensure it appears above the image container */
  width: 33%;
  margin-left: 3%;
  display: none;

  ${media.minSmallLargeDesktop(`
   display: unset;
  `)}

  ${media.minDesktop(`
   width: 25%;
  `)}

${media.minLargeDesktop(`
   width: 20%;
  `)}
`

const ImageContainer = styled.div`
  display: flex;
  height: inherit;
  position: relative;
  height: 100%;
  display: none;

  ${media.minSmallLargeDesktop(`
   display: unset;
  `)}
`

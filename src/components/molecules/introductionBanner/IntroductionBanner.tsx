import styled from 'styled-components'
import IntroBannerTitle from '../../../assets/svg/introbannertitle.svg'

const IntroductionBanner = () => {
  return (
    <BannerContainer>
      <ImageWrapper>
        <img src={IntroBannerTitle} alt="Introduction Banner Title" />
      </ImageWrapper>
      <TextWrapper>
        Introducing a remarkable set of new features that simplify and
        accelerate everyday tasks performed in the Portal. Providers have even
        greater visibility and control over flexible financing offered through
        the iCreditWorks native mobile App!
      </TextWrapper>
    </BannerContainer>
  )
}

export default IntroductionBanner

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  padding: 20px;
  //background-color: lightblue; /* Make background transparent */
  /* max-width: 237px; */
  max-width: 100%; /* Ensures the container doesn't exceed the viewport width */
  box-sizing: border-box; /* Prevents padding from adding to the width */
`

const ImageWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;

  img {
    width: 100%;
    max-height: 50%;
    max-width: 100%;
  }
`

const TextWrapper = styled.div`
  text-align: start;
  height: 50%;
  font-size: 16px;
  color: ${({ theme }) => theme.static.white || '#FFFFFF'};

  p {
    margin: 10px 0;
  }
`

import IntroBannerTitle from '../../../assets/svg/introbannertitle.svg'
import {
  BannerContainer,
  ImageWrapper,
  TextWrapper,
} from './introductionBanner.styles'

const IntroductionBanner: React.FC = () => {
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

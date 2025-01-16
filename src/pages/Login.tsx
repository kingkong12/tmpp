import { LoginForm } from '../components/molecules'
import IntroductionBanner from '../components/molecules/introductionBanner/IntroductionBanner'
import BannerImage from '../components/molecules/bannerImage/BannerImage'
import {
  Container,
  FormWrapper,
  TextContainer,
  ImageContainer,
} from './login.styles'

const Login: React.FC = () => {
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

export default Login

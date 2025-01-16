import React from 'react'
import styled from 'styled-components'
import CircularLogo from '../../../assets/svg/circleLogo.svg'
import DektopMobile from '../../../assets/svg/desktopAndMobile.svg'
import IntroBannerTitle from '../../../assets/svg/monitorAndMobile.svg'

const BannerImage = () => {
  return (
    <BannerContainer>
      <ImageWrapper>
        <MobileandDesktopWrapper>
          <ResponsiveImage src={IntroBannerTitle} alt="Circular Logo" />
        </MobileandDesktopWrapper>
      </ImageWrapper>
    </BannerContainer>
  )
}

export default BannerImage

const BannerContainer = styled.div`
  /* background-color: pink; */
  height: 100%;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%; /* Ensure the wrapper takes full height */
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`

const CircularLogoWrapper = styled.div`
  position: absolute;
`

const MobileandDesktopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
`

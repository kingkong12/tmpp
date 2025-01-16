import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  max-width: 100%;
  box-sizing: border-box;
`

export const ImageWrapper = styled.div`
  display: flex;
  margin-bottom: 2.5rem;

  img {
    width: 100%;
    max-height: 50%;
    max-width: 100%;
  }
`

export const TextWrapper = styled.div`
  text-align: start;
  height: 50%;
  font-size: 1rem;
  color: ${({ theme }) => theme.static.white || '#FFFFFF'};

  p {
    margin: 0.625rem 0;
  }
`

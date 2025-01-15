import styled from 'styled-components'

export const SecurityBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34.5px;
  background-color: ${({ theme }) => theme.colors.darkGrayBlue || '#486082'};
  color: ${({ theme }) => theme.colors.white || '#ffffff'};
  font-family: 'Neue Haas Grotesk Display', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  padding: 0 16px;
  box-sizing: border-box;
`

export const IconWrapper = styled.div`
  margin-right: 10px;
  position: relative;
  top: 2px; /* Bring the position down by 2 pixels */
`

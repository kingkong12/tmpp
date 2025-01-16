import styled from 'styled-components'
import { media } from '../../../utils/mediaQueries'

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  cursor: pointer; /* Ensure the cursor changes to pointer */
`

// Hidden default checkbox input
export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  z-index: 1;
`

// Custom checkbox square with tick mark
export const Icon = styled.span<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border: 0.07875rem solid
    ${({ theme }) => theme.colors.chineseSilver || '#ccc'}; /* 1.26px */

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${media.minSmallLargeDesktop(`
  width: 15.33px;
  height: 15.33px;

`)}

  ${media.minDesktop(`
  width: 17.25px;
  height: 17.25px;

`)}

${media.minLargeDesktop(`
  width: 24px;
  height: 24px;

`)}




  img {
    width: 1rem;
    height: 1rem;
    display: ${({ checked }) =>
      checked ? 'block' : 'none'}; /* Show tick only if checked */

    ${media.minSmallLargeDesktop(`

`)}

    ${media.minDesktop(`

`)} 

${media.minLargeDesktop(`

`)}
  }
`

// Label for the checkbox
export const Label = styled.label`
  font-size: 15.6px;
  color: ${({ theme }) => theme.static.blackCoffee || '#000'};
  cursor: pointer;

  ${media.minSmallLargeDesktop(`

    font-size: 11.5px;
`)}

  ${media.minDesktop(`
  font-size: 13px;
`)} 

${media.minLargeDesktop(`
  font-size: 18px;
`)}
`

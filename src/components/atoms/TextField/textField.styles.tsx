import styled from 'styled-components'
import { media } from '../../../utils/mediaQueries'

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
`

export const InputIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.chineseSilver || '#ccc'};
  /* padding-right: 2.5rem; */
  transition: border-color 0.3s ease;
`

export const Icon = styled.div`
  position: absolute;
  right: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.3125rem;
    height: 0.75rem;
    pointer-events: none;
  }
`

export const Input = styled.input<{ type: string }>`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  line-height: 1.12rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
  height: 54px;
  padding-right: ${({ type }) => (type === 'password' ? '2.5rem' : '0.5rem')};

  ${media.minSmallLargeDesktop(`
       height: 43.12px;
    `)}

  ${media.minDesktop(`
       height: 48.52px;
    `)} 
    
  ${media.minLargeDesktop(`
       height: 67.5px;
    `)}
`

export const Label = styled.label<{ isFocused: boolean }>`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? '-0.1rem' : '50%')};
  left: 0.5rem;
  transform: translateY(${({ isFocused }) => (isFocused ? '0' : '-50%')});
  font-size: ${({ isFocused }) => (isFocused ? '0.8rem' : '1rem')};
  color: ${({ theme }) => theme.colors.secondary || '#666'};
  transition: all 0.3s ease;
  pointer-events: none;
  padding: 0 0.1rem;
`

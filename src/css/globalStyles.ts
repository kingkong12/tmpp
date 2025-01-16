import { createGlobalStyle } from 'styled-components'
import Wallpaper from '../assets/svg/wallpaper.svg'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'CustomFont';
        src: url('/path/to/font-file.woff2') format('woff2'),
             url('/path/to/font-file.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body {
    font-family: 'CustomFont', Arial, sans-serif; /* Use the custom font */
    line-height: 1.6;
    //font-size: 8px; /* Fallback font size set to 8px */
    font-size: var(--default-font-size, 16px); /* Use browser's default font size if available */
    color: #333;

    height: 100%; /* Use complete height of the container */
   

    display: flex;
    background: url(${Wallpaper}) no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
  
}

    #root {
    height: 100vh; /* Ensure the root element also takes full height */ 
    width: 100vw;
    }

      /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

 
`

export default GlobalStyle

import { createGlobalStyle } from 'styled-components'

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
    font-size: 8px; /* Fallback font size set to 8px */
    font-size: var(--default-font-size, 8px); /* Use browser's default font size if available */
    color: #333;
    background-color: #f8f8f8;
    height: 100%; /* Use complete height of the container */
    }

    #root {
    height: 100%; /* Ensure the root element also takes full height */
    }

 
`

export default GlobalStyle

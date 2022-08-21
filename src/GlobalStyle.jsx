import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    --primary-color: #30A6FB;
    --secondary-color: #F5F7FE;
    --font-color:#525252;
    --font-color-secondary:#424242;
    --base-green:#29A073;
    --base-grey:#525252;
    --base-orange:#FF9901;
    --base-yellow:#FFBD14;
    --base-purple:#840FD1;
    --base-light-blue:#12AFF0;

    --font-size-primary:16px;
    --font-size-primary-sm:14px;
    --font-size-secondary-sm:12px;
    --font-size-secondary-sm:11px;
    --font-size-title-sm:60px;
    --font-size-subtitle:30px;

  }

`;
 
export default GlobalStyle;
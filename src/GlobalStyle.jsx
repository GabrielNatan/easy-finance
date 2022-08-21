import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  :root{
    --primary-color: #30A6FB;
    --primary-hover-color: #30A6FB80;
    --secondary-color: #F5F7FE;
    --font-color:#525252;
    --font-color-secondary:#424242;
    --base-green:#29A073;
    --base-grey:#525252;
    --base-orange:#FF9901;
    --base-yellow:#FFBD14;
    --base-purple:#840FD1;
    --base-light-blue:#12AFF0;

    --font-size-primary-lg:18px;
    --font-size-primary:16px;
    --font-size-primary-sm:14px;
    --font-size-secondary-sm:12px;
    --font-size-secondary-sm:11px;
    --font-size-title-sm:60px;
    --font-size-subtitle:30px;

    --transition: 150ms;
  }

`;
 
export default GlobalStyle;
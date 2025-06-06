import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
    }

    body{
        overflow-x: hidden;

    }
    html{
        scroll-behavior: smooth;
    }
`

export default GlobalStyles;
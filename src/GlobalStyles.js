import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: #fff;
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyles;

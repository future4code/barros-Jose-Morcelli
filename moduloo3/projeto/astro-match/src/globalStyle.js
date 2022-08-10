import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #836FFF;
        font-family: 'Mouse Memoirs', sans-serif;
    }
`
export default GlobalStyle;
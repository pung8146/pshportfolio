import { createGlobalStyle } from "styled-components";
 
const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'VT323', cursive;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #F6F9F0;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    .swiper-slide{
        width: 37rem;
        height: 42rem;
        position: relative;
        overflow: hidden;
    }
`;
 

export default GlobalStyles;
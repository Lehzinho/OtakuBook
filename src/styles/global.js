import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
body {
    background-color: ${({ theme }) => theme.COLORS.GRAYBK_100};
    color: ${({ theme }) => theme.COLORS.BLACKFONT};
    
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

}
body, input, button, textarea{
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    outline: none;
}
a{
    text-decoration: none;
}
botton, a{
    cursor: pointer;
    transition: filter 0.2s;
}
button:hover, a:hover{
    filter: brightness(0.9)
}
`;

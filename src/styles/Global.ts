import { createGlobalStyle } from "styled-components";
import { reset } from "./mixins";
import { theme } from "./Theme.styled";

export const GlobalStyle = createGlobalStyle`
    * {
        ${reset}    
}

body {
    font-family: ${theme.font.primary};
    font-size: ${theme.fontSize.s};
    font-weight: ${theme.font.weight};
    background-color: ${theme.color.dark.background};
    color: ${theme.color.dark.text};

}

h1{
    font-family: ${(props) => props.theme.font.primary}
}
h2, h{
    font-family: ${(props) => props.theme.font.primary};
}

img {
    width: 100%;
}

`;

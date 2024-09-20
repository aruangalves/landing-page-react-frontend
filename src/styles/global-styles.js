import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; //rough conversion to pixel size
  }

  body {
    font-size: 1.6rem; //16 pixels
    font-family: ${({theme}) => theme.font.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme}) => theme.font.family.secondary};
    margin: 0 0 ${({theme}) => theme.spacings.gap};
  }

  p {
    margin: ${({theme}) => theme.spacings.mediumgap} 0;
  }

  ul, ol {
    margin: ${({theme}) => theme.spacings.mediumgap};
    padding: ${({theme}) => theme.spacings.mediumgap};
  }

  a {
    color: ${({theme}) => theme.colors.secondaryColor};
  }
`;

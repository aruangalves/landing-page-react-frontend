import styled, {css} from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
  ${mediaFont(theme)};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${ uppercase ? 'uppercase' : 'none' };
`;

const mediaFont = (theme) => css`
  @media ${theme.media.ltemedium}{
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const Title = styled.h1`
  ${(props) => css`
    color: ${ props.dark ? props.theme.colors.lightBg : props.theme.colors.primaryColor };
    ${titleSize[props.sizing](props.theme)};
    ${titleCase(props.uppercase)};
  `}
`;

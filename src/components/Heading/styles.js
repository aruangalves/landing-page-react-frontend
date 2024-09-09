import styled, {css} from 'styled-components';

const titleSize = {
  small: (sizes) => css`
    font-size: ${sizes.medium};
  `,
  medium: (sizes) => css`
    font-size: ${sizes.large};
  `,
  big: (sizes) => css`
    font: ${sizes.xxlarge};
  `,
  huge: (sizes) => css`
  font: ${sizes.xhuge};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${ uppercase ? 'uppercase' : 'none' };
`;

export const Title = styled.h1`
  ${(props) => css`
    color: ${ props.dark ? props.theme.colors.lightBg : props.theme.colors.primaryColor };
    ${titleSize[props.sizing](props.theme.font.sizes)};
    ${titleCase(props.uppercase)};
  `}
`;

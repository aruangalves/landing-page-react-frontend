import styled, {css} from 'styled-components';

export const Container = styled.footer`
  ${( props ) => css`
    text-align: center;

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${props.theme.font.sizes.smaller};
    }

    a:hover {
      text-decoration: underline;
    }
  `};
`;

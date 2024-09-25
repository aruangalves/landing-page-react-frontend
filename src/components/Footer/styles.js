import styled, {css} from 'styled-components';

export const Container = styled.footer`
  ${( props ) => css`
    text-align: center;
    border-top: 0.1rem solid ${props.theme.colors.mediumGray};

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${props.theme.font.sizes.smaller};
    }

    a:hover {
      text-decoration: underline;
    }

    & > div{
      padding: 0;
    }

  `};
`;

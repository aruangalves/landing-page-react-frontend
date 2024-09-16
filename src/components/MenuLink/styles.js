import styled, {css} from 'styled-components';

export const Container = styled.a`
  ${( props ) => css`
    display: block;
    text-decoration: none;
    font-size: ${props.theme.font.sizes.small};
    padding: ${props.theme.spacings.gap};
    color: ${props.theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${props.theme.colors.secondaryColor};
      transition: left 300ms ease-in-out, width 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `};
`;

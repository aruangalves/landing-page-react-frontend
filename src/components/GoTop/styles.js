import styled, {css} from 'styled-components';

export const Container = styled.a`
  ${( props ) => css`
    color: ${props.theme.colors.lightBg};
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    background: ${props.theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    z-index: 6;
    opacity: 0.7;
  `};
`;

import styled, {css} from 'styled-components';

const containerBackGroundActivate = (theme) => css`
      background: ${theme.colors.darkBg};
      color: ${theme.colors.lightBg};
`;

export const Container = styled.div`
  ${( props ) => css`
    background: ${props.theme.colors.lightBg};
    color: ${props.theme.colors.primaryColor};
    ${props.background && containerBackGroundActivate(props.theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `};
`;

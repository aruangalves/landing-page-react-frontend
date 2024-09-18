import styled, {css} from 'styled-components';

export const Container = styled.header`
  ${( props ) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${props.theme.colors.mediumGray};
    padding: 0 3rem;
    background: ${props.theme.colors.lightBg};

    & H1{
      margin: 0 auto;
    }

    @media ${props.theme.media.ltemedium}{
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center ;
      overflow-y: auto;

      & H1{
        padding-bottom: ${props.theme.spacings.gap};
        display: flex;
        justify-content: center;
      }
    }
  `};
`;

export const MenuContainer = styled.header`
  ${( props ) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${props.theme.media.ltemedium} {
      display: block;
      text-align: center;
      padding: ${props.theme.spacings.gap};
    }
  `}
`;

export const Button = styled.button`
  ${( /**props */ ) => css``}
`;

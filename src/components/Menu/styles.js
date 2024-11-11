import styled, {css} from 'styled-components';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.header`
  ${( props ) => css`
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${props.theme.colors.mediumGray};
    padding: 0 3rem;
    background: ${props.theme.colors.lightBg};
    transition: visibility 300ms ease-in-out;
    transition: opacity 300ms ease-in-out;

    & H1{
      margin: auto 0;
    }

    @media ${props.theme.media.ltemedium}{
      position: fixed;
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center ;
      overflow-y: auto;

      visibility: hidden;
      opacity: 0;

      ${props.visible && menuVisible()}


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
  ${( props ) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.lightBg};
    border: none;
    display: none;
    pointer-events: ${props.visible ? 'none' : 'all'};
    border-radius: 1rem;

    @media ${props.theme.media.ltemedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    >svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`;

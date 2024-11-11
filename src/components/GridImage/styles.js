import styled, {css} from 'styled-components';

export const Container = styled.div`
  ${(/* props */) => css``};
`;

export const ImgGallery = styled.div`
  ${( props ) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${props.theme.spacings.gap};
    margin-top: ${props.theme.spacings.xhugegap};

    @media ${props.theme.media.ltemedium} {
      grid-template-columns: 1fr;
    }
  `};
`;

export const ImgElement = styled.div`
  ${(/* props */) => css`
    overflow: hidden;
  `};
`;

export const Image = styled.img`
  ${(/* props */) => css`
    width: 100%;
    aspect-ratio: 4/3;
    transition: transform 250ms ease-in-out;
    &:hover{
      transform: scale(1.2) rotate(5deg);
    }
  `};
`;

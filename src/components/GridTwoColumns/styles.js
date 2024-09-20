import styled, {css} from 'styled-components';

export const Container = styled.div`
  ${( props ) => css`
    display: grid;
    grid-template-columns: 4fr 6fr;
    align-items: center;
    gap: ${props.theme.spacings.gap};

    @media ${props.theme.media.ltemedium}{
      grid-template-columns: 1fr;
    }
  `};
`;

export const TextContainer = styled.div`
  ${( props ) => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacings.gap};

    @media ${props.theme.media.ltemedium}{
      margin-bottom: ${props.theme.spacings.gap};
    }
  `};
`;

export const ImageContainer = styled.div`
  ${(/* props */) => css``};
`;

export const Image = styled.img`
  ${(/* props */) => css``};
`;

import styled, {css} from 'styled-components';

import { Title as HeadingContainer } from '../Heading/styles';

export const Container = styled.div`
  ${(/* props */) => css``};
`;

export const ContainerGrid = styled.div`
  ${( props ) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${props.theme.spacings.gap};
    margin-top: ${props.theme.spacings.xhugegap};

    @media ${props.theme.media.ltemedium} {
      grid-template-columns: 1fr;
    }
  `};
`;

export const GridElement = styled.div`
  ${( props ) => css`
  ${HeadingContainer}{
    display: inline-block;
    position: relative;
    left: 5rem;
  }
  ${HeadingContainer}::before{
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: ${props.theme.font.sizes.xhuge};
    top: -2rem;
    left: -5rem;
    transform: rotate(5deg);
  }
  `};
`;

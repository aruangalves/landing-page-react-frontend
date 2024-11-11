import styled, {css} from 'styled-components';

export const Container = styled.div`
  ${( props ) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${props.theme.spacings.gap};

    @media ${props.theme.media.ltemedium} {
      max-width: 100%;
    }
  `};
`;

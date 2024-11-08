import styled, {css} from 'styled-components';

export const Container = styled.a`
  ${(/* props */) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    > img {
      height: 2.5rem;
    };
  `};
`;

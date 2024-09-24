import styled, {css} from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    font-size: ${props.theme.font.sizes.medium};
  `};
`;

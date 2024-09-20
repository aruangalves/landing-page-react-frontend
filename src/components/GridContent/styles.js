import styled, {css} from 'styled-components';

export const Container = styled.div`
  ${(/* props */) => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  `};
`;

export const HtmlContent = styled.div`
  ${( props ) => css`
    margin: ${props.theme.spacings.xhugegap} 0;
  `};
`;

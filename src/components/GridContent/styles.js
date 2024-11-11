import styled, {css} from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    text-align: center;
    max-width: 58rem;
    margin: ${props.theme.spacings.xhugegap} auto 0;
  `};
`;

export const HtmlContent = styled.div`
  ${( props ) => css`
    margin: ${props.theme.spacings.xhugegap} 0;
  `};
`;

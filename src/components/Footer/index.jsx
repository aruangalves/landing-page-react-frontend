import P from 'prop-types';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({children}) =>{
  return (
    <Styled.Container >
      <SectionContainer>
        <TextComponent asHtml>{children}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  children: P.node.isRequired,
};

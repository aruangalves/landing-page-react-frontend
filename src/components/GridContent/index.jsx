import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({title, htmlcontent, background = false}) =>{
  return (
    <SectionBackground background={background}>
      <Styled.Container >
        <Heading darkColor={background} uppercase={true} as='h2'>{title}</Heading>
        <Styled.HtmlContent>
          <TextComponent asHtml>
            {htmlcontent}
          </TextComponent>
        </Styled.HtmlContent>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  htmlcontent: P.node.isRequired,
  background: P.bool,
};

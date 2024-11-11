import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { GlobalContext } from '../../contexts/AppContext';
import { useContext } from 'react';

export const GridTwoColumns = ({ title, text, imgSrc, background = false, sectionId = ''}) =>{
  const context = useContext(GlobalContext);
  const {apiUrl} = context;

  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container >
        <Styled.TextContainer>
          <Heading darkColor={background} uppercase={true} as='h2'>{title} </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={apiUrl +imgSrc} alt={title} />
        </Styled.ImageContainer>

      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  imgSrc: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};

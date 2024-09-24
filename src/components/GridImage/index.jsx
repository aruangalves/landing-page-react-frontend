import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({background = false, title, description, grid}) =>{
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading darkColor={background} as='h2' uppercase>{title}</Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.ImgGallery>
          {grid.map( el => (
            <Styled.ImgElement key={el.imgSrc}>
              <Styled.Image src={el.imgSrc} alt={el.altText} />
            </Styled.ImgElement>
          ))}
        </Styled.ImgGallery>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string,
      imgSrc: P.string,
    })
  ).isRequired,
};

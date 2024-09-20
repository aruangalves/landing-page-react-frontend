import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({title, description, grid, background = true}) =>{
  return (
    <SectionBackground background={background}>
      <Styled.Container >
        <Heading darkColor={background} as='h2' uppercase>{title}</Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.ContainerGrid>
          {grid.map(el => (
            <Styled.GridElement key={el.title}>
              <Heading darkColor={background} as='h3' sizing='medium'>{el.title}</Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.ContainerGrid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(P.shape({
    title: P.string,
    description: P.string,
  })).isRequired,
  background: P.bool,
};

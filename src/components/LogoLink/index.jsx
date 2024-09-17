import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';


export const LogoLink = ({ text, imgSrc = '', link}) =>{
  return (
    <Heading darkColor={false} sizing='small' uppercase>
      <Styled.Container href={link}>
        {imgSrc ? (<img src={imgSrc} alt={text} />) : text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  imgSrc: P.string,
  link: P.string.isRequired,
};

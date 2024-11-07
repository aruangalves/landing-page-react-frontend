import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { GlobalContext } from '../../contexts/AppContext';
import { useContext } from 'react';


export const LogoLink = ({ text, imgSrc = '', link}) =>{
  const context = useContext(GlobalContext);
  const {apiUrl} = context;



  return (
    <Heading darkColor={false} sizing='small' uppercase>
      <Styled.Container href={link}>
        {imgSrc ? (<img src={apiUrl +imgSrc} alt={text} />) : text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  imgSrc: P.string,
  link: P.string.isRequired,
};

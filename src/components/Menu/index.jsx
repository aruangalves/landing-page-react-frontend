import P from 'prop-types';
import * as Styled from './styles';
//import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';

export const Menu = ({ links = [], logoData}) =>{
  return (
    <Styled.Container >
        <Styled.MenuContainer>
          <LogoLink {...logoData} />
          <NavLinks links={links} />
        </Styled.MenuContainer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

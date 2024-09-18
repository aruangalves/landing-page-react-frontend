import P from 'prop-types';
import * as Styled from './styles';
//import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export const Menu = ({ links = [], logoData}) =>{
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Styled.Button
        visible={menuVisible}
        onClick={() => setMenuVisible((v) => !v)}
        aria-label="Open/close menu"
      >
        {menuVisible ? (<CloseIcon />) : (<MenuIcon />) }
      </Styled.Button>
      <Styled.Container visible={menuVisible} onClick={() => setMenuVisible(false)}>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

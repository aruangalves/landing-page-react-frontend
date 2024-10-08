import P from 'prop-types';
import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links = [], logoData, footerHtml, children}) =>{
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container >
        {children}
        <Footer>{footerHtml}</Footer>
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  footerHtml: P.string.isRequired,
  ...Menu.propTypes,
};

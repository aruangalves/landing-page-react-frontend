import mockLinks from '../../components/NavLinks/mock';
import gridMock from '../../components/GridText/mock';

import { GridText } from '../../components/GridText';

export default {
  links: mockLinks,
  logoData: {
    text: 'Logo',
    link: '#'
  },
  footerHtml: '<p><a href="https://aruan.dev">Made by Aruan Galves Amaral</a></p>',
  children: (
    <>
      <GridText {...gridMock} />
      <GridText {...gridMock} background={false} />
      <GridText {...gridMock} />
      <GridText {...gridMock} background={false} />
      <GridText {...gridMock} />
      <GridText {...gridMock} background={false} />
    </>
  ),
};

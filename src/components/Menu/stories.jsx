import { Menu } from ".";

import mockLinks from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mockLinks,
    logoData: {
      text: 'Logo',
      imgSrc: '',
      link: '#logo'
    },
  },
  argTypes: {
    links: {type: '',},
  },
};

export const Template = (args) =>{
  return(
    <div style={{ height: '300vh', background: 'gray'}}>
      <Menu {...args} />
    </div>
  );
};

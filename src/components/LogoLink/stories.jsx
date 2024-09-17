import { LogoLink } from ".";

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    imgSrc: 'vite.svg',
    link: '#LogoLink',
  },
  argTypes: {
    text: {type: 'string',},
    imgSrc: {type: 'string',},
    link: {type: 'string',},
  },
};

export const ImageOnly = (args) =>{
  return(
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) =>{
  return(
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  imgSrc: '',
};

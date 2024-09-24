import { Footer } from ".";

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: '<p><a href="https://aruan.dev">Made by Aruan Galves Amaral</a></p>',
  },
  argTypes: {
    children: {type: 'string',},
  },
};

export const Template = (args) =>{
  return(
    <div>
      <Footer {...args} />
    </div>
  );
};

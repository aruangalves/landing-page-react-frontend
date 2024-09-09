import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Sample text with numbers 123'
  },
  argTypes: {
    children: {type: 'string'},
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.args = {
  darkColor: false,
};

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  darkColor: true,
};

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

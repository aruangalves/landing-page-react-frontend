import { SectionContainer } from ".";

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
    <div>
      <h1>SectionContainer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas ducimus. Obcaecati, quam! Aliquid odit fugiat quam quo! Quasi repellat, illo dolorum neque inventore fuga illum necessitatibus facere incidunt cumque?</p>

    </div>),
  },
  argTypes: {
    children: {type: '',},
  },
};

export const Template = (args) =>{
  return(
    <div>
      <SectionContainer {...args} />
    </div>
  );
};

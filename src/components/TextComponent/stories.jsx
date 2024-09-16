import { TextComponent } from ".";

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
     Reiciendis sunt, explicabo molestias quisquam expedita suscipit adipisci.
     Earum numquam et dolorum, unde ipsum fugit tempore repellat
     dignissimos error laborum aliquid sunt.`,
  },
  argTypes: {
    children: {type: 'string',},
  },
};

export const Template = (args) =>{
  return(
    <div>
      <TextComponent {...args} />
    </div>
  );
};

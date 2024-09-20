import { GridTwoColumns } from ".";

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid two columns',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore, sint quam cum veniam iste aspernatur veritatis delectus iure nam nobis, pariatur dicta quidem odio quas ducimus odit quia soluta.',
    imgSrc: 'javascript.svg',
    background: true,
  },
  argTypes: {
    title: {type: 'string',},
    text: {type: 'string'},
    imgSrc: {type: 'string'},
    background: {type: 'boolean'},

  },
};

export const Template = (args) =>{
  return(
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};

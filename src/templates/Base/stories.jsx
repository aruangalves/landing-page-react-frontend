import { Base } from ".";

import mock from './mock';
import gridMock from '../../components/GridText/mock';

import { GridText } from '../../components/GridText';

export const mockBase = {
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
    ...mock,
};

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) =>{
  return(
    <div>
      <Base {...args} />
    </div>
  );
};

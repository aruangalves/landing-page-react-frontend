import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({children, asHtml = false}) =>{
  return (
    <Styled.Container>
      {asHtml ? (<article dangerouslySetInnerHTML={{__html: children}} />) : (<p>{children}</p>)}
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  asHtml: P.bool,
};

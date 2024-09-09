import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({children, darkColor = true, as = 'h1', sizing = 'big', uppercase = false, }) => {
  return <Styled.Title dark={darkColor} as={as} sizing={sizing} uppercase={uppercase}>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  darkColor: P.bool.isRequired,
  as: P.oneOf(['h1','h2','h3','h4','h5','h6']).isRequired,
  sizing: P.oneOf(['huge','big','medium','small']).isRequired,
  uppercase: P.bool.isRequired,
}

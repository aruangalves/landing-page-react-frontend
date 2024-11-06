import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {

  return (
    <GridContent
      title='Error 404'
      htmlcontent='<p>The page you&apos;ve searched for could not be found. <a href="/">Click here to return</a>.</p>'
    />
  );
};

import { useEffect, useState } from 'react';
import { AppProvider } from '../../contexts/AppContext';
import { Base } from '../Base';
//import mock from '../Base/mock';
import { mapData } from '../../liveapi/map-data';
import { PageNotFound } from '../PageNotFound';
import { PageLoading } from '../PageLoading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { useLocation } from 'react-router-dom';

function App() {

  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi,'');
    const slug = pathname ? pathname: '1';

    const load = async () => {
      try{
        const data = await fetch('http://localhost:1337/api/pages/' +slug +'?populate=deep');
        const jsonData = await data.json();
        //console.log(jsonData);
        const pageData = mapData(jsonData);
        //console.log(pageData);

        /*await new Promise(resolve => {
          return setTimeout(() => {
            setData(pageData);
            resolve();
          }, 2500);
        });*/

        setData(pageData);
      }
      catch(error){
        console.log(error);
        setData(undefined);
      }


    }

    load();
  }, []);

  if(data === undefined) {
    return (<PageNotFound />);
  }

  if(data && !data.slug) {
    return (<PageLoading />);
  }

  const {title, menu, sections, footerText, slug } = data;
  const {imgSrc, link, links, text} = menu;

  return (
    <AppProvider>
      <Base links={links} footerHtml={footerText} logoData={{text, imgSrc, link}}>
        <title>{title}</title>
        {sections.map((section, index) => {
          const key = `${slug}-${index}`;
          switch(section.component){
            case 'section.section-two-columns':
              return (<GridTwoColumns key={key} {...section} />);
            case 'section.section-content':
              return (<GridContent key={key} {...section} />);
            case 'section.section-grid':
              return (<GridText key={key} {...section} />);
            case 'section.section-grid-gallery':
              return (<GridImage key={key} {...section} />);
          }
        })}
      </Base>
    </AppProvider>
  );
}

export default App

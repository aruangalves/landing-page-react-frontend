import { useEffect, useState } from 'react';
import { Base } from '../Base';
//import mock from '../Base/mock';
import { mapData } from '../../liveapi/map-data';
import { PageNotFound } from '../PageNotFound';
import { PageLoading } from '../PageLoading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    const load = async () => {
      try{
        const data = await fetch('http://localhost:1337/api/pages/1?populate=deep');
        const jsonData = await data.json();
        //console.log(jsonData);
        const pageData = mapData(jsonData);
        console.log(pageData);

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

  const {title, menu, sections, footerText } = data;
  const {imgSrc, link, links, text} = menu;

  return (
    <Base links={links} footerHtml={footerText} logoData={{text, imgSrc, link}}>
      <title>{title}</title>
      {sections.map((section, index) => {
        switch(section.component){
          case 'section.section-two-columns':
            return (<GridTwoColumns title={section.title} text={section.text} imgSrc={section.imgSrc} background={section.background} index={index} />);
          case 'section.section-content':
            return (<GridContent index={index} background={section.background} htmlcontent={section.htmlcontent} title={section.title} />);
          case 'section.section-grid':
            return (<GridText index={index} background={section.background} description={section.description} title={section.title} grid={section.grid} />);
          case 'section.section-grid-gallery':
            return (<GridImage index={index} background={section.background} description={section.description} title={section.title} grid={section.grid} />);
        }
      })}
    </Base>
  )

  /*return (
    <Base {...mock} />
  )*/
}

export default App

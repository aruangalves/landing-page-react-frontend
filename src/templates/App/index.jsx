import { useEffect, useState } from 'react';
import { Base } from '../Base';
import mock from '../Base/mock';
import { mapData } from '../../liveapi/map-data';
import { PageNotFound } from '../PageNotFound';
import { PageLoading } from '../PageLoading';

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

  return (
    <Base {...mock} />
  )
}

export default App

import { useEffect, useState } from 'react';
import { Base } from '../Base';
import mock from '../Base/mock';
import { mapData } from '../../liveapi/map-data';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    const load = async () => {
      const data = await fetch('http://localhost:1337/api/pages/1?populate=deep');
      const jsonData = await data.json();
      //console.log(jsonData);
      const pageData = mapData(jsonData);
      console.log(pageData);

      setData(pageData);

    }

    load();
  }, []);

  if(data === undefined) {
    return (<h1>Page not found</h1>);
  }

  if(data && !data.slug) {
    return (<h1>Loading page...</h1>);
  }

  return (
    <Base {...mock} />
  )
}

export default App

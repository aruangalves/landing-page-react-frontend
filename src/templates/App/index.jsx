import { useEffect } from 'react';
import { Base } from '../Base';
import mock from '../Base/mock';

function App() {

  useEffect(() => {
    const load = async () => {
      const data = await fetch('http://localhost:1337/api/pages/1?populate=deep');
      const jsonData = await data.json();
      console.log(jsonData);
    }

    load();
  }, []);

  return (
    <Base {...mock} />
  )
}

export default App

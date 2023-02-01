import { useState, useEffect } from 'react';
import axios from 'axios';

import './index.scss';
import Element from './Element';

function App() {
  const [allData, setAllData] = useState([])
  

  useEffect(() => {
    const getAllData = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users#")
        .then(data => setAllData(data.data))
    }

    getAllData()
  }, [])

  

  return (
    <div className="container">
      {
          allData.map((item) => (
            <Element 
              item={item} 
              key={item.id} 
            />
          ))
      }
    </div>
  );
}

export default App;

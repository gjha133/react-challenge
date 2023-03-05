import { useState, useEffect } from 'react';
import axios from 'axios';

import Element from './Element';
import Pagination from './Pagination';
import './index.scss';

function App() {
  const [allData, setAllData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)
  
  useEffect(() => {
    const getAllData = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/users#")
        .then(data => setAllData(data.data))
    }

    getAllData()
  }, [])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = allData.slice(firstPostIndex, lastPostIndex)

  const handleDec = () => {setCurrentPage(() => currentPage - 1)}
  const handleInc = () => {setCurrentPage(() => currentPage + 1)}

  return (
    <div className="container">
      {
          currentPosts.map((item) => (
            <Element 
              item={item} 
              key={item.id} 
            />
          ))
      }
      <Pagination 
        totalPosts={allData.length} 
        postsPerPage={postsPerPage} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        handleDec={handleDec} 
        handleInc={handleInc} 
      />
    </div>
  );
}

export default App;

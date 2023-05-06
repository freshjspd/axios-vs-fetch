import React, {useState, useEffect} from 'react';
import api from '../../settings/api'

export default function LoadUsers(props) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => {
    if(currentPage > 1) setCurrentPage(currentPage -1);
  }
  const nextPage = () => {
    setCurrentPage(currentPage +1);
  }

  useEffect(()=>{
        setIsLoading(true);
        (api.loadWithFetch({page: currentPage})).then(data => setUsers(data.results))
        console.log(users);
        setIsLoading(false);
  },[currentPage])

  return (
    <>
        {isError && <p>Error load</p>}
        {isLoading && <p>Load...</p>}
        <button onClick={prevPage}>prev page</button> 
        <button onClick={nextPage}>next page</button> 
        <ol>
            {users.map((u,i) => (
                <li key={i}>{JSON.stringify(u)}</li>
            ))}
        </ol>
    </>
  )
}

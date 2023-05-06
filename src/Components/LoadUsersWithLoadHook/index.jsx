import React, {useState, useEffect} from 'react';
import useDataLoad from '../../hooks/useDataLoad';
import api from '../../settings/api';

export default function LoadUsersWithLoadHook(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const {data, isLoading, isError} = useDataLoad(api.loadWithAxios, currentPage);

  const prevPage = () => {
    if(currentPage > 1) setCurrentPage(currentPage -1);
  }
  const nextPage = () => {
    setCurrentPage(currentPage +1);
  }

  return (
    <>
        {isError && <p>Error load</p>}
        {isLoading && <p>Load...</p>}
        <button onClick={prevPage}>prev page</button> 
        <button onClick={nextPage}>next page</button> 
        <ol>
            {data.map((u,i) => (
                <li key={i}>{JSON.stringify(u)}</li>
            ))}
        </ol>
    </>
  )
}

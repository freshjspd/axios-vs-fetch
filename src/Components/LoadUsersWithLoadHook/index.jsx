import React, {useState, useEffect} from 'react';
import useDataLoad from '../../hooks/useDataLoad';

export default function LoadUsersWithLoadHook(props) {
  const {data, isLoading, isError} = useDataLoad();

  return (
    <>
        {isError && <p>Error load</p>}
        {isLoading && <p>Load...</p>}
        <ol>
            {data.map((u,i) => (
                <li key={i}>{JSON.stringify(u)}</li>
            ))}
        </ol>
    </>
  )
}

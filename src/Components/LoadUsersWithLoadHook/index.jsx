import React, {useState} from 'react';
import useDataLoad from '../../hooks/useDataLoad';
import api from '../../settings/api';
import UserCard from '../UserCard';
import styles from './LoadUserWithLoadHook.module.css';
import Icon from '@mdi/react';
import { mdiSkipNext, mdiSkipPrevious} from '@mdi/js';

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
      <div className={styles.contrl}>
        <Icon onClick={prevPage} path={mdiSkipPrevious} size={2} color="darkblue"/> 
        <Icon onClick={nextPage} path={mdiSkipNext} size={2} color="darkblue"/>
        <h3>Page {currentPage}</h3>
        {isError && <h3>Error load</h3>}
        {isLoading && <h3>Load...</h3>}
      </div>
        <ol className={styles.container}>
            {data.map((u,i) => <UserCard index={i} user={u} />)}
        </ol>
    </>
  )
}

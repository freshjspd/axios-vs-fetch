import { useState, useEffect} from "react";
import api from '../settings/api';

function useDataLoad (currentPage = 1){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        (api.loadWithAxios({page: currentPage}))
            .then(data => setData(data))
            .catch((error) => setIsError(true))
            .finally(()=>{setIsLoading(false)});
        },[currentPage]);
    return {data, isLoading, isError}
}

export default useDataLoad;
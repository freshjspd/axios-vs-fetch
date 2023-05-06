import axios from 'axios';
import queryString from 'query-string';

const defaultOptions = {
    results : 10,
    page: 1,
    seed: 'pd2023'
  };
  
const configAxios = {
    onUploadProgress: (e) => console.log(e),
    onDownloadProgress: (e) => console.log(e),
    timeout: 1000,
  
  }

export function loadTestData(){
    const users=[
        {id: 1, fullName: 'John Smith'},
        {id: 2, fullName: 'Ann Smith'},
        {id: 3, fullName: 'Kate Fox'},
        {id: 4, fullName: 'Tom Adson'},
    ];
    return users;
}
  
export function loadWithFetch(options){
    const opt = {...defaultOptions, ...options};
    const params = queryString.stringify(opt, {arrayFormat: 'comma'});
    return fetch(`https://randomuser.me/api/?${params}`)
      .then((response) => response.json());
  }
  
export function loadWithAxios({results, seed, page}){
   axios.get(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`, configAxios)
      .then((response) => response.data)
      .then((data) => {return data.results})
      .catch((error) => console.log(error.message));
  }

export default {loadTestData, loadWithFetch, loadWithAxios};

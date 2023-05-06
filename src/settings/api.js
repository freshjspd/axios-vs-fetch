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
    const params = queryString.stringify(opt);  //(opt, {arrayFormat: 'comma'})
    return fetch(`https://randomuser.me/api/?${params}`)
      .then((response) => response.json());
  }
  
export function loadWithAxios(options){
    const opt = {...defaultOptions, ...options};
    const params = queryString.stringify(opt);
    return axios.get(`https://randomuser.me/api/?${params}`, configAxios)
      .then((response) => response.data.results)
  }

export default {loadTestData, loadWithFetch, loadWithAxios};


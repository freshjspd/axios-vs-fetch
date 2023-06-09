import axios from 'axios';
import queryString from 'query-string';
import config from './config.js';

const defaultOptions = {
    results : 10,
    page: 1,
    seed: config.KEY,
    inc: config.INC,
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
  
export async function loadWithFetch(options){
    const opt = {...defaultOptions, ...options};
    const params = queryString.stringify(opt);  //(opt, {arrayFormat: 'comma'})
    return await fetch(`${config.BASE_URL}?${params}`)
      .then((response) => response.json());
  }
  
export async function loadWithAxios(options){
    const opt = {...defaultOptions, ...options};
    const params = queryString.stringify(opt);
    return await axios.get(`https://randomuser.me/api/?${params}`, configAxios)
      .then((response) => response.data.results)
  }

export default {loadTestData, loadWithFetch, loadWithAxios};


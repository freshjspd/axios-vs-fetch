import axios from 'axios';

const options = {
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
  
export function loadWithFetch({results, seed, page}){
    fetch(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`)
      .then((response) => {
        if(!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data) => {console.dir(data.results)})
      .catch((error) => console.error(error));
  }
  
export function loadWithAxios({results, seed, page}){
   axios.get(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`, configAxios)
      .then((response) => {console.log('AXIOS', response); console.dir(response.data.results)})
      .catch((error) => console.error(error.message));
  }

export default {loadWithAxios, loadWithFetch}
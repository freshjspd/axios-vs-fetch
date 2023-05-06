import './App.css';
import axios from 'axios';

const options = {
  results : 10,
  page: 1,
  seed: 'pd2023'
};

function loadWithFetch({results, seed, page}){
  fetch(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`)
    .then((response) => response.json())
    .then((data) => {console.dir(data.results)})
    .catch((error) => console.error(error));
}

function loadWithAxios({results, seed, page}){
  axios.get(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`)
    .then((response) => {console.log('AXIOS', response); console.dir(response.data.results)})
    .catch((error) => console.error(error));
}

function App() {
  loadWithFetch(options);
  loadWithAxios(options);
  return (
    <>
      <h2>Load data</h2>
    </>
  );
}

export default App;

import './App.css';

const options = {
  results : 10,
  page: 1,
  seed: 'pd2023'
};

function loadWithFetch({results, seed, page}){
  fetch(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`)
    .then((response) => response.json())
    .then(({results}) => console.dir(results))
    .catch((error) => console.error(error));
}

function App() {
  loadWithFetch(options);
  return (
    <>
      <h2>Load data</h2>
    </>
  );
}

export default App;

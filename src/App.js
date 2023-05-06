import './App.css';
import LoadUsers from './Components/LoadUsers'
import LoadUsersWithLoadHook from './Components/LoadUsersWithLoadHook';

function App() {
  return (
    <>
      <h2>Load data</h2>
      <LoadUsersWithLoadHook />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Padre from './components/Padre';

function App() {

  const handleClick = () => {
    console.log('click!')
  }
  return (
    <div className="App">
      <Padre />
      <button onClick={() => handleClick()}>
        Click me
      </button>
    </div>
  );
}

export default App;

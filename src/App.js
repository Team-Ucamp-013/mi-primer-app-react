import './App.css';
import Counter from './components/Counter';
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

      <Counter />
    </div>
  );
}

export default App;

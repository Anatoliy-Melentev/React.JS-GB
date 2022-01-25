import logo from './logo.svg';
import './App.sass';
import { Messages } from './components/Messages';
import { Counter } from './components/Counter';

const buttonName = 'My element name';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="rotate">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link rotate" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Messages text={buttonName}/>
        <Counter />
      </header>
    </div>
  );
}

export default App;

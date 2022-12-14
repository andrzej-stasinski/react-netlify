import PrivateRepos from './PrivateRepos';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PrivateRepos />
        <p>
            <small>v{process.env.REACT_APP_VERSION}</small></p>
        <a
          className="App-link"
          href="https://devmentor.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and so on and so on
        </a>

      </header>
      
    </div>
  );
}

export default App;

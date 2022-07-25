import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {callAPI()}
      </header>
    </div>
  );

  function callAPI() {
    // const URL = 'http://localhost:3001';
    const URL = 'https://dopeass-website-server.herokuapp.com/';
    axios.get(URL)
      .then(res => console.log(res.data));
  }
  
}

export default App;

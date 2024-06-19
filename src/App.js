import logo from './logo.svg';
import './App.css';
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Version 2 updated</p>
      </header>
    </div>
  );
}

export default App;

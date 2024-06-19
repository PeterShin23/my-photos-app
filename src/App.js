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
        <p className="font-extrabold">Peter Shin's Photo Site</p>
        <p className="text-sm">Coming soon</p>
      </header>
    </div>
  );
}

export default App;

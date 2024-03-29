/*import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


import "./App.scss";
import "./sass/style.scss";
import Layout from './components/layout/Layout';
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
   <>
  <AuthProvider>
  <Layout />
  </AuthProvider>
  </> 
)}


export default App;




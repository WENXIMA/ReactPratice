import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
function App() {
  const [state, setState] = useState(0);
  console.log(state);
  useEffect(() => {
    setState((state) => state + 1);
  }, []);
  useEffect(() => {
    console.log(state);
    setTimeout(() => {
      console.log(state);
    }, 100);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbokx</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;

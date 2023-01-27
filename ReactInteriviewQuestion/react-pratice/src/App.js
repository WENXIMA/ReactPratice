import ReactCounterApp from './component/BFE.dev/ReactCounterApp'
import ToDoList from './component/BFE.dev/ToDoList/ToDoList';
import UseTimeOut from './component/UseTimeOut';
import {useState,useEffect} from 'react';
import { memo } from 'react';
function A() {
  console.log('A')
  return <B/>
}

const B = memo(() => {
  console.log('B')
  return <C/>
})

function C() {
  console.log('C')
  return null
}

function D() {
  console.log('D')
  return null
}

function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  console.log('App')
  return (
    <div>
      <A state={state}/>
      <D/>
    </div>
  )
}

export default App;

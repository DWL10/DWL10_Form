import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
// import { Title } from './components/Title'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Outlet></Outlet>
    </div>
  );
}

export default App

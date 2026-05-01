import { useState } from 'react'
import PaginationDem from './components/PaginationDem'
import {DebounceSearchDemo} from './components/DebounceSearchDemo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <h1>Pagination Demo</h1>
      <ol>

        
      </ol>
     <center><PaginationDem/>
     </center>
     
      <DebounceSearchDemo/>
    </div>
    </>
  )
}

export default App

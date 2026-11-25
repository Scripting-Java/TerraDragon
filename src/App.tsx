import { useState } from 'react'

import './App.css'
import { drawMap } from './utils/map'

function App() {
  const [count, setCount] = useState(0)
  const map = drawMap()
  return (
    <div>
      {map}
    </div>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import { Map } from './components/Map/map'
import { generateTiles } from './utils/tileGenerator'


function App() {
  const [count, setCount] = useState(0)
  const tier = 2
  const tiles = generateTiles(tier)
  return (
    <Map tiles={tiles} tier={2}></Map>
  )
}

export default App

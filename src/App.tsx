

import './App.css'
import { Map } from './components/Map/map'
import { generateTiles } from './utils/tileGenerator'


function App() {
  const tier = 2
  const tiles = generateTiles(tier)
  return (
    <Map tiles={tiles} tier={tier}></Map>
  )
}

export default App

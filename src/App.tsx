import { useState } from 'react'
import './App.css'
import { Map } from './components/Map/map'
import { getTiles } from './utils/tileGenerator'
import type { Tile } from './types/game'

function App() {
  const [tier, setTier] = useState(2)
  const [tiles, setTiles] = useState<Tile[]>(() => getTiles(tier, 0, []))

  function expandMap() {
    const next = tier + 1
    setTiles(getTiles(next, tier, tiles))
    setTier(next)
  }

  return (
    <div>
      <p>Tier:{tier}</p>
      <button onClick={expandMap}>Expand Map</button>
      <Map tiles={tiles} tier={tier}></Map>
    </div>
  )
}

export default App

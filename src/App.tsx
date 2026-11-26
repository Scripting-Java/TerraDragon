import { useState } from 'react'
import './App.css'
import { Map } from './components/Map/map'
import { getTiles } from './utils/tileGenerator'
import type { Tile } from './types/game'

function App() {
  const [tier, setTier] = useState(2)
  const [tiles, setTiles] = useState<Tile[]>(() => getTiles(tier, 0, []))
  const [selected, setSelected] = useState<Tile | null>(null)

  function expandMap() {
    const next = tier + 1
    setTiles(getTiles(next, tier, tiles))
    setTier(next)
  }

  return (
    <div>
      <p>Tier:{tier}</p>
      <button onClick={expandMap}>Expand Map</button>
      <Map tiles={tiles} tier={tier} onSelect={setSelected} selected={selected}></Map>
      {selected && (
        <div className='tile'>
          <div className='displayInfo'>
            <h3>You Picked:</h3>
            <p>ID: {selected.id}</p>
            <p>Position:({selected.x},{selected.y})</p>
            <p>Type: {selected.type}</p>
            <p>Building: {selected.building}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

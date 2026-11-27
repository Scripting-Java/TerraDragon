import { useState } from 'react'
import './App.css'
import { Map } from './components/Map/map'
import { getTiles } from './utils/tileGenerator'
import type { Tile, game } from './types/game'
import { starting } from './utils/init'
import { getVisibleTiles } from './utils/getVisibleTiles'

function App() {
  const [tier, setTier] = useState(2)
  const [selected, setSelected] = useState<Tile | null>(null)
  const[game,setGame] = useState<game>({...starting})
  function expandMap() {
    const next = tier + 1
    setGame(prev=>({...prev,tiles:getTiles(next,tier,prev.tiles)}))
    setTier(next)
  }

  return (
    <div>
      <p>Tier:{tier}</p>
      <button onClick={expandMap}>Expand Map</button>
      <Map tiles={getVisibleTiles(game.tiles)} tier={tier} onSelect={setSelected} selected={selected}></Map>
      {selected && (
        <div className='tile'>
          <div className='displayInfo'>
            <h3>You Picked:</h3>
            <p>ID: {selected.id}</p>
            <p>Position:({selected.x},{selected.y})</p>
            <p>Type: {selected.type}</p>
            <p>Building: {selected.building ?? "None"}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

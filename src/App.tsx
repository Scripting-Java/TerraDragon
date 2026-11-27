import { useState } from 'react'
import './App.css'
import { Map } from './components/Map/map'
import type { Tile, game } from './types/game'
import { starting } from './utils/init'
import { getVisibleTiles } from './utils/getVisibleTiles'
import { getTileCost, unlockTile } from './utils/unlockTile'
import { getTiles } from './utils/tileGenerator'

function App() {
  const [tier, setTier] = useState(2)
  const [selected, setSelected] = useState<Tile | null>(null)
  const [game, setGame] = useState<game>({ ...starting, tiles:getTiles(2,1,starting.tiles)})


  function handleUnlock() {
    if (!selected)
      return
    const next = unlockTile(selected, game)
    if (next) {
      setGame(next)
      setSelected(next.tiles.find(prev => prev.id === selected.id) ?? null)
    }
  }

  return (
    <div>
      <p>Tier:{tier}</p>
      <Map tiles={getVisibleTiles(game.tiles)} tier={tier} onSelect={setSelected} selected={selected}></Map>
      
      {selected && !selected.unlocked && (
        <div>
          <p>Cost:</p>
          <p>Money:{getTileCost(selected).money}</p>
          <p>People:{getTileCost(selected).people}</p>
          <p>Guards:{getTileCost(selected).guards}</p>
          <button onClick={handleUnlock}>Unlock?</button>
        </div>
      )}
    </div>
  )
}

export default App

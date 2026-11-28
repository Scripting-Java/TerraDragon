import { useState } from 'react'
import './App.css'
import { Map } from './components/Map/map'
import type { Tile, game } from './types/game'
import { starting } from './utils/init'
import { getVisibleTiles } from './utils/getVisibleTiles'
import { getTileCost, unlockTile } from './utils/unlockTile'
import { getTiles } from './utils/tileGenerator'
import { Sidebar } from './components/Sidebar/Sidebar/sidebar'
import { TileInfo } from './components/Tile/tile'

function App() {
  const [tier, setTier] = useState(2)
  const [selected, setSelected] = useState<Tile | null>(null)
  const [game, setGame] = useState<game>({ ...starting, tiles: getTiles(2, 1, starting.tiles) })
  const[tilePos, setTilePos] = useState({x:0,y:0})

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
      <Sidebar game={game}></Sidebar>
      <Map tiles={getVisibleTiles(game.tiles)} tier={tier} onSelect={setSelected} selected={selected} tilePos={setTilePos}></Map>

      {selected && (
        <TileInfo tile={selected} game={game} onUnlock={handleUnlock} pos={tilePos}></TileInfo>
      )}
    </div>
  )
}

export default App

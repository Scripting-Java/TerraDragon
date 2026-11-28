import type { Tile, game } from "../../types/game";
import { formatMoney, formatNumber } from "../../utils/formatter";
import { getTileCost, checkAdjacency } from "../../utils/unlockTile";
import "./tile.css"
interface tile {
    tile: Tile,
    game: game,
    onUnlock: () => void,
    pos: {x:number,y:number}
}

export function TileInfo({ tile, game, onUnlock, pos }: tile) {
    const cost = getTileCost(tile)
    const adjacent = checkAdjacency(tile, game.tiles)

    return (
        <div className="tileInfo" style={{left:pos.x,top:pos.y}}>
            <h2>Tile Info:</h2>
            {!tile.unlocked ? (
                <>
                    <h3 className="bg">Locked </h3>
                    <h3>{tile.type.substring(0, 1).toUpperCase() + tile.type.substring(1, tile.type.length)} Tile</h3>
                    <details>
                        <summary>
                            <h3>▼ Costs:</h3>
                        </summary>
                        <p>Money: <span>${formatMoney(cost.money)}</span></p>
                        <p>People: <span>{formatNumber(cost.people)}</span></p>
                        <p>Guards: <span>{formatNumber(cost.guards)}</span></p>
                    </details>
                    <button onClick={onUnlock} disabled={!adjacent || game.money < cost.money || game.people < cost.people || game.guards < cost.guards}>
                        Unlock Tile
                    </button>
                </>
            ) : (
                <>
                    <h3 className="bg">Unlocked</h3>
                    <h3>{tile.type.substring(0, 1).toUpperCase() + tile.type.substring(1, tile.type.length)} Tile</h3>
                    {tile.building && <p>Building: {tile.building.substring(0,1).toUpperCase()+tile.building.substring(1,tile.building.length)}</p>}
                    {tile.resource && <p>Resource: {tile.resource}</p>}
                    {tile.boost && <p>Boost: {tile.boost}</p>}
                </>
            )}
        </div>
    )
}
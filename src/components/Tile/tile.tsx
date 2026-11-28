import type { Tile, game } from "../../types/game";
import { formatMoney, formatNumber } from "../../utils/formatter";
import { getTileCost, checkAdjacency } from "../../utils/unlockTile";
import "./tile.css"
interface tile {
    tile: Tile,
    game: game,
    onUnlock: () => void
}

export function TileInfo({ tile, game, onUnlock }: tile) {
    const cost = getTileCost(tile)
    const adjacent = checkAdjacency(tile, game.tiles)

    return (
        <div className="tileInfo">
            <h2>Tile Info:</h2>
            {!tile.unlocked ? (
                <>
                    <p>Locked {tile.type.substring(0, 1).toUpperCase() + tile.type.substring(1, tile.type.length)} Tile</p>
                    <details>
                        <summary>
                            <h3>Costs:</h3>
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
                    <h3>Unlocked</h3>
                    {tile.building && <p>Building: {tile.building}</p>}
                    {tile.resource && <p>Resource: {tile.resource}</p>}
                    {tile.boost && <p>Boost: {tile.boost}</p>}
                </>
            )}
        </div>
    )
}
import type { Tile } from "../types/game";
import { checkAdjacency } from "./unlockTile";

export function getVisibleTiles(tiles: Tile[]) {
    const unlocked = tiles.filter(prev => prev.unlocked)
    const finalTiles = [...unlocked]
    
    for (const tile of tiles) {
        const adjacent = checkAdjacency(tile, unlocked)
        if (!tile.unlocked && adjacent)
            finalTiles.push(tile)
    }
    return finalTiles
}
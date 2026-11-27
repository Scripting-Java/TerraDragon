import type { game, Tile } from "../types/game"
import { tiles } from "./world"

function getDist(x: number, y: number) {
    return Math.abs(x) + Math.abs(y)
}

export function getTileCost(tile: Tile) {
    const dist = getDist(tile.x, tile.y)
    const people = Math.floor(Math.pow((dist - 1) * 1.35, 1.35))
    const guards = Math.floor(Math.pow((dist - 1) * 1.25, 1.25))
    const money = Math.pow((dist - 1) * 1.5, 1.5)
    return { people, guards, money }
}

export function unlockTile(tile: Tile, game: game) {
    const cost = getTileCost(tile)
    let afford = false
    if (game.guards >= cost.guards && game.money >= cost.money && game.people >= cost.people)
        afford = true
    let adjacent = false
    const tiles = game.tiles.filter(prev => prev.unlocked)
    for (const tempTile of tiles) {
        if (tile.x + 1 === tempTile.x && tile.y === tempTile.y)
            adjacent = true
        if (tile.x - 1 === tempTile.x && tile.y === tempTile.y)
            adjacent = true
        if (tile.y + 1 === tempTile.y && tile.x === tempTile.x)
            adjacent = true
        if (tile.y - 1 === tempTile.y && tile.x === tempTile.x)
            adjacent = true
    }
    if (afford && adjacent && !tile.unlocked) {
        const newTiles = game.tiles.map(prev => prev.id === tile.id ? { ...prev, unlocked: true } : prev)
        return newTiles
    }
}

export function checkAdjacency(tile:Tile,tiles:Tile[]){
    let adjacent=false
    for (const tempTile of tiles) {
        if(!tempTile.unlocked) continue
        
        if (tile.x + 1 === tempTile.x && tile.y === tempTile.y)
            adjacent = true
        if (tile.x - 1 === tempTile.x && tile.y === tempTile.y)
            adjacent = true
        if (tile.y + 1 === tempTile.y && tile.x === tempTile.x)
            adjacent = true
        if (tile.y - 1 === tempTile.y && tile.x === tempTile.x)
            adjacent = true
    }
    return adjacent
}

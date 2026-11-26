import type { Tile } from "../types/game";

export function generateTiles(tier:number): Tile[]{
    const tiles: Tile[] = []
    let id=0;
    for(let x = -1*tier; x<=tier; x++){
        for(let y = -1*tier; y<=tier; y++){
            tiles.push({id:id, x:x,y:y,unlocked:true,type:"plains",building:null,buildingLevel:null})
            id++
        }
    }
    return tiles
}
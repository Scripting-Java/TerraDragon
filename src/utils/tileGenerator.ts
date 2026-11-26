import { boostTypeArray, resourceTypeArray, type Tile } from "../types/game";
import { tiles as start} from "./world";
import type { boostType, resourceType } from "../types/game";

export function getTiles(tier:number, lastTier:number,tiles:Tile[]){
    const newTiles = tiles
    if(newTiles.length===0){
        newTiles.push(...start)
        lastTier=1
    }
    for(let i = lastTier+1; i<=tier;i++){
        newTiles.push(...generateTier(i))
    }
    return newTiles
}

function generateTile(id:number, x:number, y:number, tier:number):Tile{
    const chance = Math.random()
    if(tier>=3&&chance<0.1){
        const boost:boostType = boostTypeArray[Math.floor(Math.random()*boostTypeArray.length)]
        return{id,x,y,unlocked:false,type:"boost",boost,building:null,buildingLevel:null}
    }
    if(chance<0.3){
        const resource:resourceType = resourceTypeArray[Math.floor(Math.random()*resourceTypeArray.length)]
        return{id,x,y,unlocked:false,type:"resource", resource:resource,building:null,buildingLevel:null}
    }
    return{id,x,y,unlocked:false,type:"plains",building:null,buildingLevel:null}
}

export function generateTier(tier:number){
    const tiles: Tile[] = []
    let id = 1+4*(tier-1)*tier
    //top left corner
    tiles.push(generateTile(id++,-tier,tier,tier))
    //top row
    for(let x = -tier+1;x<=tier;x++){
        tiles.push(generateTile(id++,x,tier,tier))
    }
    //right column
    for(let y = tier-1; y>=-tier;y--){
        tiles.push(generateTile(id++,tier,y,tier))
    }
    //bottom row
    for(let x = tier-1; x>=-tier;x--){
        tiles.push(generateTile(id++,x,-tier,tier))
    }
    //left column
    for(let y = -tier+1; y<tier;y++){
        tiles.push(generateTile(id++,-tier,y,tier))
    }

    return tiles
}
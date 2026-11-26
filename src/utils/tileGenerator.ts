import { boostTypeArray, resourceTypeArray, type Tile } from "../types/game";
import { tiles as start} from "./world";
import type { boostType, resourceType } from "../types/game";

export function generateTiles(tier:number){
    const tiles: Tile[] = [...start]
    let id  =9
    for(let x = -tier; x<=tier; x++){
        for(let y = -tier; y<=tier; y++){
            //this to preserve the starting tiles
            if(Math.abs(x)<=1&&Math.abs(y)<=1){
                continue;
            }
            const chance = Math.random()
            const isAResource = chance<0.3;
            const isABoost = chance<0.1
            //check boost
            if(isABoost&&tier>=3){
                const boost:boostType = boostTypeArray[Math.floor(Math.random()*boostTypeArray.length)]
                tiles.push({id:id++,x,y,unlocked:false,type:"boost", boost:boost, building:null,buildingLevel:null})
            }
            //check resources
            else if(isAResource){
                const resource:resourceType = resourceTypeArray[Math.floor(Math.random()*resourceTypeArray.length)]
                tiles.push({id:id++,x,y,unlocked:false,type:"resource",resource:resource,building:null,buildingLevel:null})
            }
            else{
                tiles.push({id:id++,x,y,unlocked:false,type:"plains",building:null,buildingLevel:null})
            }
        }
    }
    return tiles
}
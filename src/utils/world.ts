import type { Tile } from "../types/game";

const tiles: Tile[] = [
    {id:0, x:0, y:0, unlocked:true,type:"plains",building:"townHall", buildingLevel:1},
    {id:1, x:1, y:0, unlocked:true,type:"plains",building:"house", buildingLevel:1},
    {id:2, x:-1, y:0, unlocked:true,type:"plains",building:"house", buildingLevel:1},
    {id:3, x:-1, y:1, unlocked:true,type:"plains",building:"house", buildingLevel:1},
    {id:4, x:1, y:1, unlocked:true,type:"plains",building:"house", buildingLevel:1},
    {id:5, x:-1, y:-1, unlocked:true,type:"plains",building:"house", buildingLevel:1},
    {id:6, x:1, y:1, unlocked:true,type:"plains",building:"barracks", buildingLevel:1},
    {id:7, x:0, y:-1, unlocked:true,type:"plains",building:"barracks", buildingLevel:1},
    {id:8, x:1, y:-1, unlocked:true,type:"plains",building:"office", buildingLevel:1},
]

const testingTiles: Tile[] = [
    {id:0,x:0,y:0, unlocked:true, type:"resource", building:null,buildingLevel:null, resource:"forest"},
    {id:0,x:0,y:0, unlocked:true, type:"resource", building:null,buildingLevel:null, resource:"lake"},
    {id:0,x:0,y:0, unlocked:true, type:"resource", building:null,buildingLevel:null, resource:"mountain"},
    {id:0,x:0,y:0, unlocked:true, type:"boost", building:null,buildingLevel:null, boost:"statue"},
    {id:0,x:0,y:0, unlocked:true, type:"boost", building:null,buildingLevel:null, boost:"relic"},
]
    
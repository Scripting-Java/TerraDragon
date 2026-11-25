export type tileType = "plains"|"forest"|"mountain"|"lake"|"resource"
export type buildingType = "townHall"|"house"|"barracks"|"office"
export interface Tile{
    id:number,
    x:number,
    y:number,
    unlocked:boolean,
    type:tileType,
    building: buildingType|null,
    buildingLevel:number
}
export interface Resources{
    wood:number,
    stone:number,
    fish:number
}
export interface game{
    tiles:Tile[],
    money:number,
    people:number,
    guards:number,
    resources:Resources
}

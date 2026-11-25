export type tileType = "plains"|"resource"|"boost"
export type boostType = "statue"|"relic"
export type resourceType = "forest"|"mountain"|"lake"
export type buildingType = "townHall"|"house"|"barracks"|"office"
export interface Tile{
    id:number,
    x:number,
    y:number,
    unlocked:boolean,
    type:tileType,
    building: buildingType|null,
    resource?: resourceType
    boost?:boostType
    buildingLevel:number|null
}
export interface resourceCarrier{
    wood:number,
    stone:number,
    fish:number
}

export interface game{
    tiles:Tile[],
    money:number,
    people:number,
    guards:number,
    resources:resourceCarrier
}

import type { Tile } from "../../types/game";

import "./map.css"

interface map {
    tiles: Tile[],
    tier:number
    onSelect: (tile:Tile) => void
    selected:Tile|null,
    tilePos: (pos:{x:number,y:number}) => void
}

export function Map({ tiles, tier, onSelect,selected, tilePos }: map) {

    return (
        <div className="map">
            {tiles.map(tile => (
                <div key={tile.id} 
                className={`tile ${tile.type} ${tile.building ? "building":""} 
                ${selected?.id===tile.id ? "selected":""}`} 
                style={{gridColumn: tile.x + tier+2, gridRow: tier - tile.y+ 2 }} 
                onClick={(pos)=>{onSelect(tile); const bounds = pos.currentTarget.getBoundingClientRect(); tilePos({x:bounds.right+12,y:bounds.top})}}>
                        
                        <div className="displayInfo">
                        <p>{tile.building}</p>
                        <p>Id: {tile.id}</p>
                        <p>Position: ({tile.x},{tile.y})</p>
                        <p>Tile: {tile.type}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}


import type { Tile } from "../../types/game";

import "./map.css"

interface map {
    tiles: Tile[],
    tier:number
    onSelect: (tile:Tile) => void
    selected:Tile|null
}

export function Map({ tiles, tier, onSelect,selected }: map) {

    return (
        <div className="map">
            {tiles.map(tile => (
                <div key={tile.id} className={`tile ${tile.type} ${tile.building ? "building":""} ${selected?.id===tile.id ? "selected":""}`} style={{gridColumn: tile.x + tier+2, gridRow: tier - tile.y+ 2 }} onClick={()=>onSelect(tile)}>
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


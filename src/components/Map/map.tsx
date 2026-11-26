import type { Tile } from "../../types/game";

import "./map.css"

interface map {
    tiles: Tile[],
    tier:number
}

export function Map({ tiles, tier }: map) {

    return (
        <div className="map">
            {tiles.map(tile => (
                <div key={tile.id} className={`tile ${tile.type} ${tile.building ? "building":""}`} style={{ gridColumn: tile.x + tier+2, gridRow: tier - tile.y+ 2 }}>
                        
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


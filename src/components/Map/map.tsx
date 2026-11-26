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
                <div key={tile.id} className="tile" style={{ gridColumn: tile.x + tier+1, gridRow: tier - tile.y+ 1 }}>
                        <div className="displayInfo">
                        <p>{tile.building}</p>
                        <p>Id: {tile.id}</p>
                        <p>Position: ({tile.x},{tile.y})</p>
                        <p>Type: {tile.type}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}


import type { game } from "../../types/game";
import { tiles } from "../../utils/world";
import "./map.css"

export function Map(){
    return(
        <div className="map">
            {tiles.map(tile=>(
                <div key={tile.id} className="tile" style={{gridColumn: tile.x+2, gridRow: 2 -tile.y}}>
                    <p>{tile.building}</p>
                    <p>{tile.id}</p>
                </div>
            ))}
        </div>
    )
}
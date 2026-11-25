import type { game } from "../types/game";
import { tiles } from "./world";


export function drawMap(){
    return(
        <div className="map">
            {tiles.map(tile=>(
                <div key={tile.id} className="tile">
                    {tile.building}
                </div>
            ))}
        </div>
    )
}
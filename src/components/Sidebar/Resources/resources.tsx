import type { game } from "../../../types/game";
import "./resources.css"
interface Resources{
    game:game
}
export function Resources({game}: Resources){
    return(
        <div className="resources">
            <h2>Resources</h2>
            <p>Wood:{game.resources.wood}</p>
            <p>Stone:{game.resources.stone}</p>
            <p>Fish:{game.resources.fish}</p>
        </div>
    )
}
import type { game } from "../../../types/game";
import "./resources.css"
interface Resources{
    game:game
}
export function Resources({game}: Resources){
    return(
        <div className="resources">
            <h2>Resources</h2>
            <p>Wood:<span>{game.resources.wood}</span></p>
            <p>Stone:<span>{game.resources.stone}</span></p>
            <p>Fish:<span>{game.resources.fish}</span></p>
        </div>
    )
}
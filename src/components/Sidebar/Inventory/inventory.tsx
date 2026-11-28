import type { game } from "../../../types/game";
import "./inventory.css"
interface inventory{
    game:game
}

export function Inventory({game}:inventory){
    return(
        <div className="inventory">
            <h2>Inventory</h2>
            <p>Money:<span>{game.money}</span></p>
            <p>People:<span>{game.people}</span></p>
            <p>Guards: <span>{game.guards}</span></p>
        </div>  
    )
}
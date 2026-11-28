import { useState } from "react";
import type { game } from "../../../types/game";
import { Resources } from "../Resources/resources";
import "./sidebar.css"
import { Inventory } from "../Inventory/inventory";

interface Sidebar {
    game: game
}

export function Sidebar({ game }: Sidebar) {
    const [panel, setPanel] = useState<string | null>(null)
    function togglePanel(name:("inventory"|"resources")){
        if(name===panel)
            setPanel(null)
        else
            setPanel(name)
    }
    return (
        <div>
            <div className="sidebar">
                <button onClick={()=>togglePanel("inventory")}>Inventory</button>
                <button onClick={()=>togglePanel("resources")}>Resources</button>
                <button>Buildings</button>
                <button>Dragon</button>
            </div>
            {panel==="inventory" && <Inventory game={game}></Inventory>}
            {panel==="resources" && <Resources game={game}></Resources>}

        </div>
    )
} 
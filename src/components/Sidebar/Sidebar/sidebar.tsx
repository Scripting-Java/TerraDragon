import { useState } from "react";
import type { game } from "../../../types/game";
import { Resources } from "../Resources/resources";
import "./sidebar.css"

interface Sidebar {
    game: game
}

export function Sidebar({ game }: Sidebar) {
    const [panel, setPanel] = useState<string | null>(null)
    return (
        <div>
            <div className="sidebar">
                <button>Inventory</button>
                <button onClick={()=>setPanel("resources")}>Resources</button>
                <button>Buildings</button>
                <button>Dragon</button>
            </div>
            {panel==="resources" && <Resources game={game}></Resources>}

        </div>
    )
} 
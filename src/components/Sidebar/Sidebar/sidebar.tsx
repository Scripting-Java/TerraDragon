import type { game } from "../../../types/game";
import { Resources } from "../resources";
import "./sidebar.css"

interface Sidebar {
    game: game
}

export function Sidebar({ game }: Sidebar) {
    return (
        <div className="sidebar">
            <button>Inventory</button>
            <button>Resources</button>
            <button>Buildings</button>
            <button>Dragon</button>
        </div>
    )
} 
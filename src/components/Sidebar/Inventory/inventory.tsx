import { useRef, useState } from "react";
import type { game } from "../../../types/game";
import "./inventory.css"
interface inventory{
    game:game
}

export function Inventory({game}:inventory){
    const [position,setPosition] = useState({x:155,y:window.innerHeight/2})
    const dragging = useRef(false)
    const dist = useRef({x:0,y:0})

    function handleClickToDrag(drag:React.PointerEvent<HTMLDivElement>){
        dragging.current = true
        dist.current = {x:drag.clientX - position.x, y:drag.clientY-position.y}
        drag.currentTarget.setPointerCapture(drag.pointerId)
    }

    function handleDrag(drag:React.PointerEvent<HTMLDivElement>){
        if(!dragging.current)
            return
        setPosition({x:drag.clientX-dist.current.x, y:drag.clientY-dist.current.y})
    }
    function handleClickOff(drag: React.PointerEvent<HTMLDivElement>){
        dragging.current = false
        const bounds = drag.currentTarget.getBoundingClientRect()
        //long statement to reset panel to original position if some random drags it off screen.
        if(bounds.left<0||bounds.top<0||bounds.right>window.innerWidth||bounds.bottom>window.innerHeight)
            setPosition({x:155,y:window.innerHeight/2})
    }

    return(
        <div className="inventory" style={{left:position.x, top:position.y}} onPointerDown={handleClickToDrag} onPointerUp={handleClickOff} onPointerMove={handleDrag}>
            <h2>Inventory</h2>
            <p>Money:<span>{game.money}</span></p>
            <p>People:<span>{game.people}</span></p>
            <p>Guards: <span>{game.guards}</span></p>
        
        </div>  
    )
}
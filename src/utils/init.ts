import type { game } from "../types/game";
import { tiles } from "./world";

export const starting: game = {
    tiles: tiles,
    money:100,
    people:10,
    guards:5,
    resources:{
        wood:50,
        stone:50,
        fish:20
    }
}

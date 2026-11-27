import type { game } from "../types/game";
import { tiles } from "./world";

export const starting: game = {
    tiles: tiles,
    money:100,
    people:100,
    guards:50,
    resources:{
        wood:0,
        stone:0,
        fish:0
    }
}

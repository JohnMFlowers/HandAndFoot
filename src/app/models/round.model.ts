import { CleanCanastas } from "./clean-canastas.model";
import { DirtyCanastas } from "./dirty-canastas.model";
import { GoingOut } from "./going-out.model";
import { Item } from "./item.model";
import { PerfectCut } from "./perfect-cut.model";
import { PointsHeld } from "./points-held.model";
import { PointsPlayed } from "./points-playted.model";
import { RedThrees } from "./red-threes.model";

let nextId = 0;

export class Round {
    items: Item[] = [
        new PerfectCut(),
        new GoingOut(),
        new RedThrees(),
        new CleanCanastas(),
        new DirtyCanastas(),
        new PointsPlayed(),
        new PointsHeld()
    ];
    id = nextId++;
    get totalScore() {
        return this.items.reduce((total, item) => total + item.total, 0);
    }
}

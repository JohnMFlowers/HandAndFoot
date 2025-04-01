import { CleanCanastas } from './clean-canastas.model';
import { DirtyCanastas } from './dirty-canastas.model';
import { GoingOut } from './going-out.model';
import { ItemBase } from './item-base.model';
import { PerfectCut } from './perfect-cut.model';
import { PointsHeld } from './points-held.model';
import { PointsPlayed } from './points-playted.model';
import { RedThrees } from './red-threes.model';
import { RoundTotal } from './round-total';

let nextId = 0;

export class Round {
  items: ItemBase[] = [
    new PerfectCut(),
    new GoingOut(),
    new RedThrees(),
    new CleanCanastas(),
    new DirtyCanastas(),
    new PointsPlayed(),
    new PointsHeld(),
    new RoundTotal(),
  ];
  id = nextId++;
}

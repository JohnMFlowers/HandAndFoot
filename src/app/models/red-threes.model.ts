import { ItemBase } from './item.model';

export class RedThrees extends ItemBase {
  override name = 'Red Threes';
  override multiplier = 100;
  override get total(): number {
    return this.value * this.multiplier + (this.value % 4) * 400;
  }
}

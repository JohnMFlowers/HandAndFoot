import { ItemBase } from './item-base.model';

export class RedThrees extends ItemBase {
  override name = 'Red Threes';
  override multiplier = 100;
  override get total(): number {
    return (
      (this.value ?? 0) * this.multiplier +
      Math.floor((this.value ?? 0) / 4) * 400
    );
  }
}

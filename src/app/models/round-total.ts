import { ItemBase, ItemValueType } from './item-base.model';

export class RoundTotal extends ItemBase {
  override name = 'Total';
  override valueType = 'total' as ItemValueType;
  override multiplier = 1;
}

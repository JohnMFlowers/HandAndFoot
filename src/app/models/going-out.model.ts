import { ItemBase, ItemValueType } from './item-base.model';

export class GoingOut extends ItemBase {
  override name = 'Going Out';
  override multiplier = 100;
  override valueType = 'boolean' as ItemValueType;
}

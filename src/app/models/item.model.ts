export type ItemValueType = 'number' | 'boolean';

export interface Item {
  id: number;
  name: string;
  valueType: ItemValueType;
  value: number | boolean;
  readonly total: number;
  multiplier: number;
}

let nextId = 0;

export class ItemBase implements Item {
  id = nextId++;
  name = 'Base Item';
  multiplier = 100;
  valueType: ItemValueType = 'number';
  private _value = 0;
  private _total = 0;
  get value() {
    return this._value;
  }
  set value(value: number) {
    this._value = value;
    this._total = value * this.multiplier;
  }
  get total() {
    return this._total;
  }
}

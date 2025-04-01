export type ItemValueType = 'number' | 'boolean' | 'total';

export interface Item {
  id: number;
  name: string;
  valueType: ItemValueType;
  value: number | boolean;
  readonly total: number;
  multiplier: number;
  formattedTotal: string;
}

let nextId = 0;

export class ItemBase implements Item {
  id = nextId++;
  name = 'Base Item';
  multiplier = 100;
  valueType: ItemValueType = 'number';
  private _value = 0;
  get value() {
    return this._value;
  }
  set value(value: number) {
    this._value = value;
  }
  get total() {
    return this._value * this.multiplier;
  }
  get formattedTotal() {
    const formatter = new Intl.NumberFormat('en-US');
    return formatter.format(this.total);
  }
}

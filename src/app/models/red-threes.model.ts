import { Item, ItemValueType } from "./item.model";

export class RedThrees implements Item {
    readonly name = 'Red Threes';
    valueType: ItemValueType = 'number';
    private _value = 0;
    private _total = 0;
    get value() {
        return this._value;
    }
    set value(value: number) {
        this._value = value;
        this._total = value * 100;
    }
    get total() {
        return this._total;
    }
}

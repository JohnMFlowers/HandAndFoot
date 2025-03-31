import { Item, ItemValueType } from "./item.model";

export class DirtyCanastas implements Item {
    readonly name = 'Dirty Canastas';
    valueType: ItemValueType = 'number';
    private _value = 0;
    private _total = 0;
    get value() {
        return this._value;
    }
    set value(value: number) {
        this._value = value;
        this._total = value * 300;
    }
    get total() {
        return this._total;
    }
}

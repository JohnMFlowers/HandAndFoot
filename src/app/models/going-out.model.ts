import { Item, ItemValueType } from "./item.model";

export class GoingOut implements Item {
    readonly name = 'Going Out';
    valueType: ItemValueType = 'boolean';
    private _value = false;
    private _total = 0;
    get value() {
        return this._value;
    }
    set value(value: boolean) {
        this._value = value;
        this._total = value ? 100 : 0;
    }
    get total() {
        return this._total;
    }
}

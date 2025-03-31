export type ItemValueType = 'number' | 'boolean';

export interface Item {
    readonly name: string;
    readonly valueType: ItemValueType;
    value: number | boolean;
    readonly total: number;
}

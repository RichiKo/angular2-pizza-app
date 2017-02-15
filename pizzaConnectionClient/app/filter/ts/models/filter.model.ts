import {SelectItem} from 'primeng/primeng';

export class FilterModel {
  private _pizzaTypeSelectionList: SelectItem[];
  private _seledctedPizzaType: string;

  constructor() {
    this._pizzaTypeSelectionList = [];
    this._pizzaTypeSelectionList.push({ label: 'Alle anzeigen', value: 'ALL' });
    this._pizzaTypeSelectionList.push({ label: 'Nur Vegetarisch', value: 'V' });
    this._pizzaTypeSelectionList.push({ label: 'Nur mit Fleisch', value: 'C' });
    this._seledctedPizzaType = 'All';
  }

  get pizzaTypeSelectionList(): Array<SelectItem> {
    return this._pizzaTypeSelectionList
  }

  set pizzaTypeSelectionList(value: Array<SelectItem>) {
    this._pizzaTypeSelectionList = value;
  }

  get pizzaTypeSelectionType(): string {
    return this._seledctedPizzaType;
  }

  set pizzaTypeSelectionType(value: string) {
    this._seledctedPizzaType = value;
  }
}
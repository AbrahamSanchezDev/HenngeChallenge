import { MenuData } from '../menu/MenuData';

export interface SortingData extends MenuData {
  text: string;
  callback: Function;
  increment: boolean;
  active: boolean;
}


import axios from 'axios';

export const apiHost = "https://express-shina.ru/vacancy/geo-state";

export interface IGeoState {
  pickPoints: Array<IPickPoint>;
}

export interface IPickPoint {
  address: string;
  budgets: Array<string>;
  latitude: number;
  longitude: number;
}

export async function getData() {
  const res = await axios.get(apiHost);
  return res.data;
}

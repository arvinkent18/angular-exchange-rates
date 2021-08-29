import { Rate } from "../rates.model";

export interface RatesState {
  rates: Rate[];
}

export const initialState: RatesState = {
  rates: [],
}
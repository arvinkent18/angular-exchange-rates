import { Rates } from "../../models/rates.model";

export interface RatesState {
  rates: Rates;
}

export const initialState: RatesState = {
  rates: null,
}
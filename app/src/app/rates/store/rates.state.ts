import { Rate } from "../../models/rates.model";

export interface RatesState {
  rates: Rate[];
}

export const initialState: RatesState = {
  rates: [],
}
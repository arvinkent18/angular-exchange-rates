import { ratesReducer } from "../rates/store/rates.reducer";
import { RatesState } from "../rates/store/rates.state";

export interface AppState {
  counter: RatesState,
}

export const appReducer = {
  rates: ratesReducer,
}
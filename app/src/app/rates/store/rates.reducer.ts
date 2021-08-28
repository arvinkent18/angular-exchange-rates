import { createReducer, on } from "@ngrx/store";
import { loadRatesSuccess } from "./rates.actions";
import { initialState } from "./rates.state";

const _ratesReducer = createReducer(
  initialState,
  on(loadRatesSuccess, (state, action) => {
    return {
      ...state,
      rates: action.rates,
    } 
  })
);

export function ratesReducer(state, action) {
  return _ratesReducer(state, action);
}
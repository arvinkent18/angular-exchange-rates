import { initialState } from "./rates.state";
import { createReducer, on } from "@ngrx/store";

const _ratesReducer = createReducer(initialState);

export function ratesReducer(state, action) {
  return _ratesReducer(state, action);
}
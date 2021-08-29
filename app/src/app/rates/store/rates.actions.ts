import { createAction, props } from '@ngrx/store';
import { Rate } from '../rates.model';

export const loadRates = createAction('[Exchange Rate API] load exchange rates');
export const loadRatesSuccess = createAction(
  '[Exchange Rate API] load exchange rates success', 
  props<{ rates: Rate[] }>()
);
export const loadRatesError = createAction('[Exchange Rate API] load exchange rates error');
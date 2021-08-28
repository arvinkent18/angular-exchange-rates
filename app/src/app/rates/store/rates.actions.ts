import { createAction, props } from '@ngrx/store';
import { Rates } from 'src/app/models/rates.model';

export const loadRates = createAction('[Exchange Rate API] load exchange rates');
export const loadRatesSuccess = createAction(
  '[Exchange Rate API] load exchange rates success', 
  props<{ rates: Rates[] }>()
);
export const loadRatesError = createAction('[Exchange Rate API] load exchange rates error');
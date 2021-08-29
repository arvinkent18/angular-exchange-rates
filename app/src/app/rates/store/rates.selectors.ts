import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RatesState } from './rates.state';

export const RATE_STATE_NAME = 'rates';

const getRatesState = createFeatureSelector<RatesState>('rates');

export const getRates = createSelector(getRatesState, (state: RatesState) => state.rates);
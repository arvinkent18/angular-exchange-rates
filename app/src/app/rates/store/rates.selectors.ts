import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RatesState } from './rates.state';

const getRatesState = createFeatureSelector<RatesState>('rates');

export const getRates = createSelector(getRatesState, state => {
  return state.rates;
})
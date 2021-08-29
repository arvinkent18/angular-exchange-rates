import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RatesService } from '../../services/rates.service';
import { loadRates, loadRatesError, loadRatesSuccess } from './rates.actions';

@Injectable()
export class RatesEffects {
  constructor(
    private actions$: Actions,
    private ratesService: RatesService,
  ) {}

  loadRates$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadRates),
        mergeMap((action) => {
          return this.ratesService.getRates().pipe(
            map((data) => {
              return loadRatesSuccess({ rates: data })
            }),
            catchError(() => of(loadRatesError()))
          )
        })
      )
    }
  );
}

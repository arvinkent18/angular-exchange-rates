import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Rates } from '../models/rates.model';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  constructor(private http: HttpClient) {}

  /**
   * Get all exchange rates
   * 
   * @returns 
   */
  getRates() {
    return this.http
      .get(environment.EXCHANGE_RATE_API)
      .pipe(map((data) => {
        const rates: Rates[] = [];
        const result = { ...data };

        for (let key in result['conversion_rates']) {
          rates.push({ currency: key, value: result['conversion_rates'][key] })
        }

        console.log(rates);

        return rates;
      }))
  }
}
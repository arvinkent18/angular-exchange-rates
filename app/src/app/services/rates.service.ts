import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Rate } from '../models/rates.model';
import { Observable } from 'rxjs';

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
        const rates: Rate[] = [];

        for (const [key, value] of Object.entries(data['conversion_rates'])) {
          rates.push({ ...data[key], currency: key, value })
        }

        return rates;
      }))
  }
}
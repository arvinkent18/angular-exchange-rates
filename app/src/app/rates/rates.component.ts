import { loadRates } from './store/rates.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Rates } from '../models/rates.model';
import { AppState } from './../store/app.state';
import { getRates } from './store/rates.selectors';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  rates: Observable<Rates>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.rates = this.store.select(getRates);
    this.store.dispatch(loadRates());
  }

}

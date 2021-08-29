import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RatesRoutingModule } from './rates-routing.module';
import { RatesComponent } from './rates.component';
import { RatesEffects } from './store/rates.effects';
import { ratesReducer } from './store/rates.reducer';
import { RATE_STATE_NAME } from './store/rates.selectors';

@NgModule({
  declarations: [
    RatesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RatesRoutingModule,
    StoreModule.forFeature('rates', ratesReducer),
  ]
})
export class RatesModule { }

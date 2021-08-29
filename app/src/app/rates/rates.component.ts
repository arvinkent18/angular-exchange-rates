import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Rate } from './rates.model';
import { loadRates } from './store/rates.actions';
import { getRates } from './store/rates.selectors';
import { RatesState } from './store/rates.state';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  rates: Rate[];
  ratesSubscription: Subscription;
  displayedColumns = ['currency', 'value'];
  dataSource = new MatTableDataSource<Rate>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private store: Store<{ rates: RatesState }>) { }

  ngOnInit(): void {
    this.store.select(getRates).subscribe(
      (rates: Rate[]) => {
        this.dataSource.data = rates;
      }
    );
    this.store.dispatch(loadRates());
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}

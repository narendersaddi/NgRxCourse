import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app.state';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter: number;
  //@Input() counter:any;
  counter$:Observable<{counter: number}>
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
    // this.store.select('counter').subscribe(res =>{
    //   this.counter = res.counter;
    // })
    this.counter$ = this.store.select('counter');
  }
}

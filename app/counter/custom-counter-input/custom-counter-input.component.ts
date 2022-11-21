import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.state';
import { customIncremnetValue, onChangeTextValue } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value:number;
  textValue:string;
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(res=>{
      this.textValue = res.textMsg
    })
  }
  addValue(){
    this.store.dispatch(customIncremnetValue({counter: +this.value}))
  }
  onChangeText(){
    this.store.dispatch(onChangeTextValue())
  }
}

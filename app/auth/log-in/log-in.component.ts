import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logInForm:FormGroup

  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      email:new FormControl(' ', [Validators.required, Validators.email]),
      password:new FormControl(' ',[Validators.required])
    })
  }
  onLogin(){
    const email = this.logInForm.value.email;
    const password = this.logInForm.value.password;
    this.store.dispatch(setLoadingSpinner({status:true}));
    this.store.dispatch(loginStart({email, password}));
  }

}

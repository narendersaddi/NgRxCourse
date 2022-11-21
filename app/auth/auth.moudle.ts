import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LogInComponent } from './log-in/log-in.component';
import { AuthEffects } from './state/auth.effects';
import { AuthReducer } from './state/auth.reducers';
import { AUTH_STATE_NAME } from './state/auth.selector';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login', pathMatch:'full'
      },
      {
        path: 'login',
        component: LogInComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    RouterModule.forChild(routes)
    ],
})
export class AuthModule {}

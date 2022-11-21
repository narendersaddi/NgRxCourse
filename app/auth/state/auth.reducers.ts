import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { initialState } from "src/app/post/state/post.state";
import { loginSuccess } from "./auth.actions";

const _authReducer = createReducer(initialState ,on(loginSuccess, (state, action) => {
        return {
            ...state,
            user:action.user,
        };
    })
);

export function AuthReducer (state:any, action:any) {
    return _authReducer(state, action);
}
import { createReducer, on } from "@ngrx/store"
import { setLoadingSpinner } from "./shared.actions"
import { initialState } from "./shared.state"

const _SharedReducer = createReducer(
    initialState,
    on(setLoadingSpinner, (state, action) =>{
        return {
            state,
            showLoaing:action.status,
        }
    })
    )


export function SharedReducer(state:any, action:any){
    return _SharedReducer(state, action)
}
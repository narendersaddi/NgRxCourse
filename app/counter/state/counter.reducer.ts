
import { createReducer,on } from "@ngrx/store"
import { customIncremnetValue, decrement, increment, reset, onChangeTextValue} from "./counter.actions"
import { initialCounter } from "./counter.state"

const _counterReducer = createReducer(
    initialCounter,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        };
    }),
    on(customIncremnetValue, (state, action) =>{
        console.log(action)
        return {
            ...state,
            counter:state.counter + action.counter
        }
    }),
    on(onChangeTextValue, (state) =>{
        return {
            ...state,
            textMsg:'Good Morning World.....!'
        }
    })
    );

export function counterReducer(state:any, action:any){
    return _counterReducer(state, action)
}
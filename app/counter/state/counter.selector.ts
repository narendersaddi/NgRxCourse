import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCountState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCountState, (state) =>{
    return state.counter;
});

export const getTextMsg = createSelector(getCountState, (state) => {
    return state.textMsg;
})
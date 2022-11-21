import { createAction, createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.state";

export const SHRED_STATE_NAME = 'shared';

const getSharedState = createFeatureSelector<SharedState>(SHRED_STATE_NAME)

export const getLoading = createSelector(getSharedState, (state) =>{
    return state.showLoaing;
})
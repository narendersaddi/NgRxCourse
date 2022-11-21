import { createAction, props } from "@ngrx/store";

export const SET_LOADINGN_ACTION = '[shared state] Set loading spinner';


export const setLoadingSpinner = createAction(SET_LOADINGN_ACTION, props<{status:boolean}>());
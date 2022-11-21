import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decremnet');
export const reset = createAction('reset');

export const customIncremnetValue = createAction(
    'cutsomIncrementValue',
     props<{counter:number}>()
)

export const onChangeTextValue = createAction('onChangeTextValue')
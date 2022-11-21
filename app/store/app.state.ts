import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducers } from "../post/state/post.reducers";
import { PostState } from "../post/state/post.state";
import { SharedReducer } from "./Shared/shared.reducer";
import { SHRED_STATE_NAME } from "./Shared/shared.selector";
import { SharedState } from "./Shared/shared.state";

export interface appState {
    counter:CounterState;
    posts:PostState;
    [SHRED_STATE_NAME]:SharedState
}

export const appReducer = {
    counter:counterReducer,
    posts:postsReducers,
    [SHRED_STATE_NAME]:SharedReducer
}
import { Posts } from "src/app/models/posts.models"

export interface PostState{
    posts:Posts[];
} 

export const initialState:PostState = {
    posts:[
        {id:'1', title:'Sample title-1',description:"Hi...Hello.. Testing one....!"},
        {id:'2', title:'Sample title-2',description:"Hello.. Testing one....!"},
        {id:'3', title:'Sample title-3',description:"Hi...Good morning....!"}
    ]
}
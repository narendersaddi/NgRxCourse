import { User } from "src/app/models/user.model";

export class AuthState{
    user:User | null
}

const initialSate :AuthState = {
    user:null
};
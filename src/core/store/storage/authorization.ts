import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types/typesAuth.ts";



interface IAuthState {
    user: IUser[];
    isAuthenticated: boolean;
}

const initialState: IAuthState = {
    user: [],
    isAuthenticated: false,
}

const AuthSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{name: string, password: string}>) => {
            state.user.push({
                username: action.payload.name,
                password: action.payload.password,
            })
            localStorage.setItem("user", JSON.stringify(state.user))
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
})

export default AuthSlice.reducer;


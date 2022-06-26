import { MENU } from "./action";

const initialState = false

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case MENU:
            return action.payload
        default:
            return state
    }
}
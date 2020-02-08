import {FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADD_NEW_SMURF} from "../actions";

const initialState = {
    smurfs: [],
    error: " "
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_SMURFS_START:
        return{
            ...state,
            isLoading: true
        }
        case FETCHING_SMURFS_SUCCESS:
        return {
            ...state,
            isLoading: false,
            smurfs: action.payload
        }
        case ADD_NEW_SMURF:
        return {
            ...state,
            isLoading: false,
            smurfs: action.payload
        }
        default:
        return state;
    }
}
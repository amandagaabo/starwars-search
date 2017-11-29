import {
    SEARCH_CHARACTERS_REQUEST,
    SEARCH_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_ERROR
} from './actions';

const initialState = {
    characters: [],
    loading: false,
    error: null
};

export function characterReducer(state=initialState, action) {
    // Handle these sync actions
    if (action.type === SEARCH_CHARACTERS_REQUEST) {
      return Object.assign( {}, state, {
        characters: [],
        loading: true,
        error: null
      })
    }
    else if (action.type === SEARCH_CHARACTERS_SUCCESS) {

//       let characters = action.characters
//       let error = null
//       if (action.characters === "") {
//         error = "No results found"
//         characters = []
//       }
      
      return Object.assign( {}, state, {
        characters: action.characters,
        loading: false,
        error: null
      })
    }
    else if (action.type === SEARCH_CHARACTERS_ERROR) {
      return Object.assign( {}, state, {
        characters: [],
        loading: false,
        error: action.error
        
      })
    }
    return state;
}

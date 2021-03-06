import { AUTH_USER , AUTH_ERROR} from "../actions/type";
const INTIAL_STATE = {
  authenticated: "",
  errMessage: ""
};

export default function(state = INTIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
        return { ...state , errorMessage: action.payload}
    default:
      return state;
  }
}

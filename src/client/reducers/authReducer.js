import { FETCH_CURRENT_USER } from "../actions"

export default (state = null, actions) => {
  switch (actions.payload) {
    case FETCH_CURRENT_USER:
      return actions.payload || false
    default:
      return state
  }
}

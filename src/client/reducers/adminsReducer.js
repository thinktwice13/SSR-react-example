import { FETCH_ADMINS } from "./actions"

export default (state = [], action) => {
  switch (action.payload) {
    case FETCH_ADMINS:
      return action.payload
    default:
      return state
  }
}

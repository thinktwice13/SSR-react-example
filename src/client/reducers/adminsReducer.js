import { FETCH_ADMINS } from "../actions"

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      console.log("Admins:", action.payload)
      return action.payload
    default:
      return state
  }
}

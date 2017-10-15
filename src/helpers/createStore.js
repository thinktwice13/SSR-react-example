import { createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

export default () => {
  cons tstore = createStore(reducers, {}, applyMiddleware(thunk))
  return store
}
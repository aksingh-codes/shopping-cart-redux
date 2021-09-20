import { createStore } from "redux"
// For Connecting Redux Dev Tools
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./rootReducer"

// store takes reducers combined
const store = createStore(rootReducer, composeWithDevTools())

export default store
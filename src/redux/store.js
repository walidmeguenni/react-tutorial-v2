import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counter";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;

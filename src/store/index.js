import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import languageContentReducer from "./modules/language/reducer"
import themeReducer from "./modules/theme/reducer";

const reducers = combineReducers({"content": languageContentReducer, "theme": themeReducer});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
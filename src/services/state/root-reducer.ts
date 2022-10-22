import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";

export const rootReducer = combineReducers({
  // Add your reducers here
  ingredients: ingredientsReducer,
});

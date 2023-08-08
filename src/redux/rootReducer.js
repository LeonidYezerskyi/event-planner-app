import { combineReducers } from "redux";
import eventsReducer from "./reducer";

// Об'єднуємо редюсери
const rootReducer = combineReducers({
  events: eventsReducer,
});

export default rootReducer;

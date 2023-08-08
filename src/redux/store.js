import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Створюємо Redux Store з об'єднаним кореневим редюсером
const store = configureStore({
  reducer: rootReducer,
});

export default store;

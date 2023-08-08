import { createReducer } from "@reduxjs/toolkit";
import { addEvent } from "./actions";

const initialState = [];

const eventsReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEvent, (state, action) => {
    state.push(action.payload);
  });
});

export default eventsReducer;

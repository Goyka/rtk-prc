import { configureStore } from "@reduxjs/toolkit";
import prac from "./reducer";

const store = configureStore({
  reducer: { prac: prac },
});

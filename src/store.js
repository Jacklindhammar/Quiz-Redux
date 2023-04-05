import { setStore, createStore } from "hooks-for-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";

const logDispatch = () => (next) => (action) => {
  console.log("dispatching", action);
  return next(action);
};

process.env.NODE_ENV === "development" &&
  setStore(createStore({}, composeWithDevTools(applyMiddleware(logDispatch))));
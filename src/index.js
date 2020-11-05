import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import offers from "../src/mocks/offers";
import reviews from "../src/mocks/reviews";
import {reducer} from "./store/reducer";

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
      />,
    </Provider>,
    document.querySelector(`#root`)
);


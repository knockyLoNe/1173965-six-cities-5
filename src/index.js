import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "../src/mocks/offers";
import reviews from "../src/mocks/reviews";

const Settings = {
  RENTAL_OFFERS_COUNT: 312
};

ReactDOM.render(
    <App
      rentalOffersCount={Settings.rentalOffersCount}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);


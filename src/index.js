import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  rentalOffersCount: 312,
};

ReactDOM.render(
    <App
      rentalOffersCount={Settings.rentalOffersCount}
    />,
    document.querySelector(`#root`)
);


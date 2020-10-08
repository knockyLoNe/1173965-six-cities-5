import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = (props) => {

  return (
    <Main rentalOffersCount={props.rentalOffersCount}/>
  );
};

App.propTypes = {
  rentalOffersCount: PropTypes.number.isRequired,
};

export default App;

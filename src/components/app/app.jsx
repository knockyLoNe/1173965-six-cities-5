import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = (props) => {
  // eslint-disable-next-line react/prop-types

  return <Main />;
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;

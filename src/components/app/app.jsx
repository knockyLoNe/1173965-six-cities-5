import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import LoginScreen from "../login-screen/login-screen";
import PropertyScreen from "../property-screen/property-screen";


const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            rentalOffersCount={props.rentalOffersCount}
            offers={props.offers}
          />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route path="/offer" exact component={PropertyScreen} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentalOffersCount: PropTypes.number.isRequired,
  offers: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
};

export default App;

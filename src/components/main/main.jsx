import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import PlaceCardScreen from "../place-card-screen/place-card-screen";
import placeCardProps from "../place-card-screen/place-card.prop";
import MapScreen from "../map-screen/map-screen";
import cities from "../../mocks/cities";
import {Link, useHistory} from "react-router-dom";

const Main = (props) => {
  const {offers} = props;

  const [filteredOffers, setFilteredOffers] = useState(offers);
  const history = useHistory();
  const query = history.location.search.split(`=`)[1];

  const firstCityIndex = 0;

  useEffect(() => {
    const q = offers.filter((offer) => offer.cityId === +query || firstCityIndex);
    setFilteredOffers(q);
  }, [offers, query]);

  const currentCity = cities.find((city) => city.id === (+query || firstCityIndex));

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li className="locations__item" key={city.id}>
                <Link
                  className="locations__item-link tabs__item"
                  to={`?city=${city.id}`}
                >
                  <span>{city.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {filteredOffers.length} places to stay in {currentCity.name}
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex="0"
                >
                  Popular
                </li>
                <li className="places__option" tabIndex="0">
                  Price: low to high
                </li>
                <li className="places__option" tabIndex="0">
                  Price: high to low
                </li>
                <li className="places__option" tabIndex="0">
                  Top rated first
                </li>
              </ul>
            </form>
            <PlaceCardScreen offers={filteredOffers} />
          </section>
          <div className="cities__right-section">
            <MapScreen offers={filteredOffers} />
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  rentalOffersCount: PropTypes.number.isRequired,
  offers: placeCardProps,
};

export default Main;

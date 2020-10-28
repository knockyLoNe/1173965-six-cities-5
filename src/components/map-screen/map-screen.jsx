import React, {useEffect} from "react";
import leaflet from "leaflet";
import placeCardProps from "../place-card-screen/place-card.prop";

const MapScreen = (props) => {
  const {offers} = props;

  const city = [52.38333, 4.9];

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  const zoom = 12;

  useEffect(() => {
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);


    offers.forEach((offer) => {
      const offerCords = [offer.latitude, offer.longitude];
      leaflet
      .marker(offerCords, {icon})
      .addTo(map);
    });
  });

  return (
    <div id="map" style={{width: `100%`}}></div>
  );
};

MapScreen.propTypes = {
  offers: placeCardProps,
};

export default MapScreen;



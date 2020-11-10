import React, {useEffect, useState, useRef} from "react";
import leaflet from "leaflet";
import placeCardProps from "../place-card-screen/place-card.prop";

const MapScreen = (props) => {
  const {offers} = props;
  const city = [52.38333, 4.9];
  const [isMapRendered, setIsMapRendered] = useState(false);
  const mapRef = useRef(undefined);

  const icon = leaflet.icon({
    iconUrl: `/img/pin.svg`,
    iconSize: [30, 30],
  });
  const zoom = 12;

  useEffect(() => {
    if (!isMapRendered) {
      mapRef.current = leaflet.map(`map`, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true,
      });
      mapRef.current.setView(city, zoom);
      setIsMapRendered(true);
      leaflet
        .tileLayer(
            `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
            {
              attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
            }
        )
        .addTo(mapRef.current);
    }
  }, [isMapRendered]);

  useEffect(() => {
    mapRef.current.eachLayer((layer) => {
      if (layer.options && layer.options.pane === `markerPane`) {
        layer.remove();
      }
    });
    if (isMapRendered) {
      offers.forEach((offer) => {
        const offerCords = [offer.latitude, offer.longitude];
        leaflet.marker(offerCords, {icon}).addTo(mapRef.current);
      });
    }
  }, [offers, isMapRendered]);

  return <div id="map" style={{width: `100%`, height: `100vh`}}></div>;
};

MapScreen.propTypes = {
  offers: placeCardProps,
};

export default MapScreen;

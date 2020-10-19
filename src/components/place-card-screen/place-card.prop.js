import PropTypes from "prop-types";

export default PropTypes.shape({
  offers: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    room: PropTypes.number.isRequired,
    adultCount: PropTypes.number.isRequired,
    prise: PropTypes.number.isRequired,
    ratingStars: PropTypes.number.isRequired,
    ratingNumber: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  })).isRequired,
}).isRequired;

import offers from "../mocks/offers";
import {ActionType} from "./action";

const initialState = {
  cityId: 3,
  property: offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      const {cityId} = action.payload;
      return Object.assign({}, cityId, state);

    case ActionType.GET_PROPERTIES_LIST:
      return state;
    default:
      return state;
  }
};

export {reducer};

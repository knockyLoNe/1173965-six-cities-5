import offers from "../mocks/offers";

const initialState = {
  cityId: 3,
  property: offers,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {...state, cityId = action.payload}

    case ActionType.GET_PROPERTYS_LIST:
      return (state)
  }
}

export default reducer;


export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  GET_PROPERTIES_LIST: `GET_PROPERTIES_LIST`,
};

export const ActionCreator = {
  cityChange: (payload) => ({
    type: ActionType.CITY_CHANGE,
    payload,
  }),

  getPropertysList: (payload) => ({
    type: ActionType.GET_PROPERTIES_LIST,
    payload,
  })
};

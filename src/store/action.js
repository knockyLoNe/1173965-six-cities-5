export const ActionType = {
  CITY_CHANGE: `CITY_CHANGE`,
  GET_PROPERTYS_LIST: `GET_PROPERTYS_LIST`,
};

export const ActionCreator = {
  cityChange: (payload) => ({
    type: ActionType.CITY_CHANGE,
    payload,
  }),

  getPropertysList: (payload) => ({
    type: ActionType.GET_PROPERTYS_LIST,
    payload,
  })
};

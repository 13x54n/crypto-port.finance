export const initialState = {};

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOPBAR_NOTIFICATION":
      return {
        ...state,
        notificationBarContent: action.payload.notificationBarContent,
      };

    case "SET_TRENDING_COIN_LIST":
      return {
        ...state,
        trendingCoinList: action.trendingCoinList,
      };

    default:
      return state;
  }
};

export default Reducer;

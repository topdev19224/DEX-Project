import {produce} from 'immer';
import {
    LOGIN_SUCCESS,
    SET_MODE,
    LOGOUT,
    GET_BALANCE_SUCCESS,
    BUY_CHIP_SUCCESS,
    WITHDRAW_CHIP_SUCCESS,
    GET_PLAYERS_SUCCESS,
    TRANSFER_CHIP_SUCCESS,
} from '../actions/action-type';

export const initialState = {
  isLogin: sessionStorage.getItem("token"),
  mode: sessionStorage.getItem('mode') || 'light',
  user: {
    data: JSON.parse(sessionStorage.getItem('user')),
    loading: false
  },
  players: []
};

export default function (state = initialState, action = {}) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.user.data = action.payload
        break;
      case SET_MODE:
        draft.mode = action.data;
        sessionStorage.setItem('mode', action.data);
        break;
      case LOGOUT:
        draft.isLogin = false;
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        break;
      case GET_BALANCE_SUCCESS:
        draft.user.data.Balance = action.data.Balance;
        break;
      case BUY_CHIP_SUCCESS:
        draft.user.data.Balance = action.data.Balance;
        break;
      case WITHDRAW_CHIP_SUCCESS:
        draft.user.data.Balance = action.data.Balance;
        break;
      case GET_PLAYERS_SUCCESS:
        draft.players = action.payload.Players;
        break;
      case TRANSFER_CHIP_SUCCESS:
        draft.user.data.Balance = action.payload.Balance;
        break;
      default:
        return state;
    }
  });
}

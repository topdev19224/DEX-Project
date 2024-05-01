import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SET_MODE,
    LOGOUT,
    GET_BALANCE,
    GET_BALANCE_SUCCESS,
    BUY_CHIP,
    WITHDRAW_CHIP,
    BUY_CHIP_SUCCESS,
    WITHDRAW_CHIP_SUCCESS,
    GET_PLAYERS,
    GET_PLAYERS_SUCCESS,
    TRANSFER_CHIP,
    TRANSFER_CHIP_SUCCESS
} from '../actions/action-type';
  
export const login = data => ({type: LOGIN, data});
export const loginSuccess = payload => ({type: LOGIN_SUCCESS, payload});
export const loginError = error => ({type: LOGIN_ERROR, error});
export const setMode = data => ({type: SET_MODE, data});
export const logout = () => ({type: LOGOUT});
export const getBalance = () => ({type: GET_BALANCE});
export const getBalanceSuccess = (data) => ({type: GET_BALANCE_SUCCESS, data});
export const buyChip = (data) => ({type: BUY_CHIP, data});
export const buyChipSuccess = (data) => ({type: BUY_CHIP_SUCCESS, data});
export const withdrawChip = (data) => ({type: WITHDRAW_CHIP, data});
export const withdrawChipSuccess = (data) => ({type: WITHDRAW_CHIP_SUCCESS, data});
export const getPlayers = () => ({type: GET_PLAYERS});
export const getPlayersSuccess = payload => ({type: GET_PLAYERS_SUCCESS, payload});
export const transferChip = data => ({ type: TRANSFER_CHIP, data});
export const transferChipSuccess = payload => ({ type: TRANSFER_CHIP_SUCCESS, payload});

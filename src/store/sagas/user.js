import { put, call, takeLatest } from 'redux-saga/effects';
import axios from '../../utils/axios';
import {
    loginError,
    loginSuccess,
    getBalanceSuccess,
    buyChipSuccess,
    withdrawChipSuccess,
    getPlayersSuccess,
    transferChipSuccess
} from '../actions/user';
import {
    LOGIN,
    GET_BALANCE,
    BUY_CHIP,
    WITHDRAW_CHIP,
    GET_PLAYERS,
    TRANSFER_CHIP
} from '../actions/action-type';
import { toast } from "react-toastify";

export function* loginRequest(action) {
    try {
        const res = yield call(axios.post, '/user/login', action.data);
        const { token, RealName, Avatar, Balance, Player, success, msg, SessionKey } = res.data;
        if (msg) {
            if (success)
                toast.success(msg);
            else
                toast.warn(msg);
        }
        if (success) {
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", JSON.stringify({ RealName: RealName, Avatar: Avatar, Balance: Balance, Player: Player, SessionKey: SessionKey }));
            yield call(axios.setToken, token);
            yield put(loginSuccess({ RealName, Avatar, Balance, SessionKey, Player }));
            window.location.reload();
        }

    } catch (e) {
        console.log(e)
        toast.warn(e?.response?.data?.message || 'An error occurred');
        yield put(loginError(e));
    }
}

export function* getBalance(action) {
    try {
        const res = yield call(axios.get, '/account/balance');
        const { success, msg, Balance } = res.data;
        if (msg) {
            if (success)
                toast.success(msg);
            else
                toast.warn(msg);
        }
        if (success) {
            yield put(getBalanceSuccess({ Balance }));
        }
    } catch (e) {
        console.log(e);
        toast.warn(e?.response?.data?.message || 'An error occurred');
    }
}

export function* buyChip(action) {
    try {
        const res = yield call(axios.post, 'account/buy', { amount: action.data });
        const { success, msg, Balance } = res.data;
        if (msg) {
            if (success)
                toast.success(msg);
            else
                toast.warn(msg);
        }
        if (success) {
            yield put(buyChipSuccess({ Balance }));
        }
    } catch (e) {
        console.log(e);
        toast.warn(e?.response?.data?.message || 'An error occurred');
    }
}

export function* withdrawChip(action) {
    try {
        const res = yield call(axios.post, 'account/withdraw', { amount: action.data });
        const { success, msg, Balance } = res.data;
        if (msg) {
            if (success)
                toast.success(msg);
            else
                toast.warn(msg);
        }
        if (success) {
            yield put(withdrawChipSuccess({ Balance }));
        }
    } catch (e) {
        console.log(e);
        toast.warn(e?.response?.data?.message || 'An error occurred');
    }
}

export function* getPlayers(action) {
    try {
        const res = yield call(axios.get, 'account/players');
        const { success, msg, Players } = res.data;
        console.log(Players)
        if (msg) {
            if (success)
                toast.success(msg);
            else
                toast.warn(msg);
        }
        if (success) {
            yield put(getPlayersSuccess({ Players }));
        }
    } catch (e) {
        console.log(e);
    }
}

export function* transferChip(action) {
    try {
        const res = yield call(axios.post, 'account/transferchip', {...action.data})
        const { success, msg, Balance } = res.data;
        if (msg) {
            if (success)
                toast.success(msg);
            else
                toast.warn(msg);
        }
        if (success) {
            yield put(transferChipSuccess({ Balance }));
        }
    } catch (e) {
        console.log(e);
    }
}

export default function* () {
    yield takeLatest(LOGIN, loginRequest);
    yield takeLatest(GET_BALANCE, getBalance);
    yield takeLatest(BUY_CHIP, buyChip);
    yield takeLatest(WITHDRAW_CHIP, withdrawChip);
    yield takeLatest(GET_PLAYERS, getPlayers);
    yield takeLatest(TRANSFER_CHIP, transferChip);
}

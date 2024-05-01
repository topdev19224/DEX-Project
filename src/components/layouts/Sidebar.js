import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Input, Button } from "antd";
import SidebarLogo from "../../assets/images/logo.png";
import Walletpng from "../../assets/images/wallet.png";
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { login } from "../../store/actions/user";

const SidebarComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pwdRef = useRef(null);
    const isLogin = useSelector(s => s.user.isLogin);
    const [loginInfo, setLoginInfo] = useState({
        player: '',
        password: ''
    })
    const onLogin = () => {
        if (loginInfo.player === '' || loginInfo.password === '') {
            toast.warn('Please input player information'); return;
        }
        dispatch(login(loginInfo))
    }
    return (
        <>
            <div className="menu-space" />
            <div className="side-menu">
                <Row align="middle" className="logoContainer" onClick={() => navigate("/")}>
                    <img src={SidebarLogo} alt="" className="logo" style={{ width: '100%', objectFit: 'cover' }} />
                </Row>
                <div className="menu">
                    {
                        isLogin ?
                            <Row>
                                <Row className="w-full">
                                    <div className="menu-item w-full buy-chip" onClick={() => navigate("/wallet")} ><img src={Walletpng} style={{ width: 30 }} alt=""/><span>Wallet & Chip</span></div>
                                </Row>
                                <Row className="w-full">
                                    {/* <div className="menu-item w-full buy-chip" onClick={() => navigate("/chip")} ><img src={buyChip} style={{ width: 30 }} /> <span>Transactions</span></div> */}
                                </Row>
                            </Row> :
                            <Row className="w-full">
                                <Row className="w-full">
                                    <Input placeholder="Poker maven ID" onChange={e => setLoginInfo({...loginInfo, player: e.target.value})} style={{width: '100%'}} onPressEnter={() => pwdRef.current.focus()}/>
                                </Row>
                                <Row style={{marginTop: 10}} className="w-full">
                                    <Input ref={pwdRef} placeholder="Password" type="password" onChange={e => setLoginInfo({...loginInfo, password: e.target.value})} onPressEnter={() => onLogin()}/>
                                </Row>
                                <Row style={{ width: '100%', marginTop: 10 }}>
                                    <Button size="large" className="login-btn w-full" type="primary" onClick={() => onLogin()}>Login</Button>
                                </Row>
                            </Row>
                    }
                </div>
            </div>
        </>
    )
}

export default SidebarComponent;

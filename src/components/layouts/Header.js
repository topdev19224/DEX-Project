import React from 'react';
import { Avatar, Popover, Row, Switch } from 'antd';
import defaultAvatar from '../../assets/images/avatar0.jpg';
import playBtn from '../../assets/images/play.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout, setMode } from '../../store/actions/user';
import axios from '../../utils/axios';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const darkMode = useSelector((s) => s.user.mode === "dark");
    const user = useSelector((s) => s.user.user.data);
    const isLogin = useSelector((s) => s.user.isLogin);
    const logoutFunc = React.useCallback(() => {
        dispatch(logout());
        axios.setToken("");
        localStorage.removeItem("token");
        navigate("/");
    }, [dispatch, navigate]);
    return (
        <div className='header'>
            {isLogin ? <div style={{fontSize: 25, fontWeight: 700, paddingLeft: 20}}>Welcome back!</div> : <div style={{fontSize: 25, fontWeight: 700, paddingLeft: 20}}>Welcome to Tiltedstacks</div>}
            <div style={{display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                {isLogin && <div className="play-btn" onClick={() => navigate('/play')}>
                    <img src={playBtn} style={{ height: '100%' }} alt='' />
                </div>}
                {isLogin && <Popover
                    placement="bottomRight"
                    content={
                        <div>
                            <div className="popoverMenu">
                                <div className="profileHead">
                                    <Avatar src={defaultAvatar} size={'large'} className='setting-avatar' />
                                    <div className="ellipsis" style={{ marginLeft: 10 }}>
                                        {user?.RealName}
                                    </div>
                                </div>
                                {/* <div onClick={() => navigate("/dashboard/settings")} className="item">
                                    <Row align="middle">
                                        <div className="ellipsis">Profile Settings</div>
                                    </Row>
                                </div> */}
                                <div onClick={logoutFunc} className="item">
                                    <Row align="middle">
                                        <div className="ellipsis">Logout</div>
                                    </Row>
                                </div>
                                {/* <div className="item">
                                    <Row align="middle">
                                        <div className="ellipsis">Dark Mode</div>
                                        <Switch defaultChecked={darkMode} onChange={(val) => dispatch(setMode(val ? "dark" : "light"))} />
                                    </Row>
                                </div> */}
                            </div>
                        </div>
                    }
                >
                    <Avatar src={defaultAvatar} size={'large'} className='setting-avatar' />
                </Popover>}
            </div>

        </div>
    )
}

export default Header;

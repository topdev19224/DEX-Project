import React from "react";
import { FloatButton } from 'antd';
import { WalletOutlined, SettingOutlined, LogoutOutlined, BankFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Play = () => {
    const navigate = useNavigate();
    const sessionKey = useSelector((s) => s.user.user.data.SessionKey);
    const PlayerName = useSelector((s) => s.user.user.data.Player);
    return (
        <div className="play-panel">
            <iframe src={PlayerName && sessionKey ? `https://tiltedstacks.com/?LoginName=${PlayerName}&SessionKey=${sessionKey}` : "https://tiltedstacks.com"} />
            <FloatButton.Group
                trigger="click"
                type="primary"
                style={{
                    top: 4,
                    right: 4
                }}
                icon={<SettingOutlined />}
            >
                <FloatButton icon={<LogoutOutlined />} onClick={() => navigate('/')} />
                <FloatButton icon={<WalletOutlined />} onClick={() => navigate('/wallet')}/>
                <FloatButton icon={<BankFilled />} onClick={() => navigate('/chip')}/>
            </FloatButton.Group>
        </div>
    )
}

export default Play;
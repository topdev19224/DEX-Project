import React from 'react';
import { Row } from 'antd';
import { Outlet } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';

const PortalLayout = () => {
    return (
        <Row>
            <Sidebar />
			<div className="flex1">
				<div className="container">
                    <Header />
					<Outlet />
				</div>
			</div>
		</Row>
    )
}

export default PortalLayout;
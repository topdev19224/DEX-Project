import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import "./index.scss";
import "./assets/scss/index.scss";
import { ToastContainer } from 'react-toastify';
import { ConfigProvider } from "antd";
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-loading';
import PortalLayout from './components/layouts/PortalLayout';
import cx from 'classnames';
import { useSelector } from "react-redux";
import ClipLoader from 'react-spinners/ClipLoader';

// pages
import Portal from "./pages/Portal";
import Chip from "./pages/Chip";
import Wallet from "./pages/Wallet";
import Play from "./pages/Play";

const MyLoadingScreen = () =>
  <div className="loader-container">
    <ClipLoader color={'#fff'} size={100} />
  </div>

function App() {

  const auth = useSelector(s => s.user);
  const [height, setHeight] = React.useState(window.innerHeight);
  React.useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: 'red'
      }
    }}>
      <div className={cx('app', { dark: true })} style={{ minHeight: height }}>
        <BrowserRouter>
          <Routes maxLoadingTime={1300} loadingScreen={MyLoadingScreen}>
            <Route path="/" element={<PortalLayout />} >
              <Route index element={<Portal />} loading />
              {auth.isLogin ? 
                <React.Fragment>
                  <Route path="/wallet" element={<Wallet />} loading />
                  <Route path="/chip" element={<Chip />} loading />
                </React.Fragment>:
                <Route path="*" element={<Navigate to="/" />} />
              }
            </Route>
            {auth.isLogin ? <Route path="/play" element={<Play />} loading /> :
              <Route path="*" element={<Navigate to="/" />} />
            }
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </ConfigProvider>
  );
}

export default App;

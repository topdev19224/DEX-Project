import { Row, Carousel } from "antd";
import React from "react";
import ca1 from '../../assets/images/banner/banner1.jpg'
import ca2 from '../../assets/images/banner/banner2.jpg'
import ca3 from '../../assets/images/banner/banner3.jpg'
const Portal = () => {
    const contentStyle = {
        minHeight: 400,
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return (
        <div style={{position: 'absolute', width: '100%', paddingRight: 20}}>
            <div className="banner" >
                <Carousel autoplay style={{width: '100%'}}>
                    <div>
                        <h3 style={contentStyle}><img src={ca1} style={{height: 400, width: '100%'}}/></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}><img src={ca2} style={{height: 400, width: '100%'}}/></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}><img src={ca3} style={{height: 400, width: '100%'}}/></h3>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Portal;
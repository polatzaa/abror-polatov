import React from 'react';
import './Section5.css';

import phoneLeft from '../assets/phoneleft.png';
import phoneRight from '../assets/phoneright.png';
import appStore from '../assets/appstore.png';
import googlePlay from '../assets/googleplay.png';

const Section5 = () => {
  return (
    <section className="section5">
      <div className="section5-container">

        <div className="content-side">
          <h2 className="section5-title">
            Хватит тратить свое время в очередях
          </h2>
          <p className="section5-subtitle">
            Приложение скоро будет доступно для бета тестирования в AppStore и Google Play
          </p>
          
          <div className="download-buttons">
            <a href="#" className="store-link">
              <img src={appStore} alt="App Store" />
            </a>
            <a href="#" className="store-link">
              <img src={googlePlay} alt="Google Play" />
            </a>
          </div>
        </div>

        <div className="image-side">
          <div className="phone-wrapper">
            <img src={phoneLeft} alt="Phone App" className="phone phone-1" />
            <img src={phoneRight} alt="Phone App Detail" className="phone phone-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
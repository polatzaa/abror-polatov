import React from 'react';
import './Section7.css';

const Section7 = () => {
  return (
    <footer className="section7">
      <div className="container footer-container">

        <div className="footer-logo">
          GetWash
        </div>

        <nav className="footer-nav">
          <a href="#how">Как использовать</a>
          <a href="#partners">Партнерам</a>
          <a href="#download">Скачать</a>
          <a href="#reviews">Отзывы</a>
        </nav>

        <div className="footer-action">
          <button className="footer-btn">Получить доступ</button>
        </div>
      </div>
    </footer>
  );
};

export default Section7;
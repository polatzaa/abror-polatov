import React from 'react';
import './Section6.css';
import userImg from '../assets/userImg.png';

const Section6 = () => {
  return (
    <section className="section6">
      <div className="container">
        <div className="section6-header">
          <div className="text-content">
            <h2 className="section-title">Отзывы о приложении</h2>
            <p className="section-subtitle">
              Таким образом консультация с широким активом влечет за собой процесс внедрения и 
              модернизации направлений прогрессивного развития. Разнообразный и богатый опыт 
              сложившаяся структура организации обеспечивает широкому кругу (специалистов) 
              участие в формировании модели развития.
            </p>
          </div>
          
          <div className="navigation">
            <button className="nav-arrow prev">←</button>
            <button className="nav-arrow next active">→</button>
          </div>
        </div>

        <div className="user-block">
          <div className="avatar-container">
            <img src={userImg} alt="John Doe" className="user-avatar" />
          </div>
          <div className="user-info">
            <h4 className="user-name">John Doe</h4>
            <p className="user-role">Водитель</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
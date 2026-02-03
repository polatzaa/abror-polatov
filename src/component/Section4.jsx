import React from 'react';
import { FileText, Calendar, MessageCircle, Star, Wallet } from 'lucide-react';
import './Section4.css';

const Section4 = () => {
  const data = [
    { id: 1, icon: <FileText />, text: "Просматривайте историю заказа" },
    { id: 2, icon: <Calendar />, text: "Создание отчета неделя/месяц/год" },
    { id: 3, icon: <MessageCircle />, text: "Обратная связь от клиентов" },
    { id: 4, icon: <Star />, text: "Контроль качества работы сотрудников" },
    { id: 5, icon: <Wallet />, text: "Бесконтактная оплата работы" },
  ];

  return (
    <section className="section4">
      <div className="container4">
        <h2 className="title4">Стань нашим партнером и начни зарабатывать:</h2>
        <p className="description4">
          Автоматизируй свой бизнес вместе с нами. Подключись к нашей системе бронирования, 
          чтобы получать новых клиентов и распределить нагрузку равномерно на весь день. 
          Мы предоставляем удобные инструменты для формирования отчетов в несколько кликов и многое другое.
        </p>

        <div className="cards-grid">
          {data.map((item) => (
            <div key={item.id} className="card-item">
              <div className="icon-box">
                {item.icon}
              </div>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>

        <button className="partner-btn">Стать партнером</button>
      </div>
    </section>
  );
};

export default Section4;
import './Section3.css';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';



const Section2 = () => {
  return (
    <section className='section2'>
        <div className='secimg2'>
            <img src={img3} alt="" />
        </div>
        <div className="sectext2">
          <h2>Быстрый старт:</h2>
          <div className="smallp">
            <img src={img4} alt="" />
            <div>
              <p>Скачай и зарегистрируйся</p>
              <small>Наше приложение доступно в Apple Store и Google Play</small>
            </div>
          </div>
          <div className="smallp">
            <img src={img5} alt="" />
            <div>
              <p>Выбери ближайшую автомойку</p>
              <small> Из свободных поблизости или оставь заказ на удобное время</small>
            </div>
          </div>
          <div className="smallp">
            <img src={img6} alt="" />
            <div>
              <p>Выбери дополнительные услуги</p>
              <small>Можешь их добавить к своему основному заказу</small>
            </div>
          </div>
          <div className="smallp">
            <img src={img7} alt="" />
            <div>
              <p>Оплати внутри приложения </p>
              <small>Бесконтактная оплата внутри приложения и прозрачные цены</small>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Section2
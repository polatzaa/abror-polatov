import './Section2.css';
import img2 from './img2.png';

const Section1 = () => {
  return (
    <section className='section1'>
        <div className="sectext">
            <h1>Поиск ближайшей свободной <br /> автомойки и бронирование <br /> на удобное время.</h1>
            <p>Мы поможем сохранить ваше время для более <br /> интересных занятий, чем стоять в очереди.</p>
            <button><span>Получить доступ</span></button>
        </div>
        <div className="secimg">
            <img src={img2} alt="Car Wash" />
        </div>
    </section>
  )
}

export default Section1
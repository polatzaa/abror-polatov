import './Section1.css'
import img1 from "./img1.png"

const Header = () => {
  return (
    <header>
        <nav>
            <img src={img1} alt="GetWash" />
            <ul>
                <li>
                    <a href="#">Как использовать</a>
                </li>
                <li>
                    <a href="">Партнерам</a>
                </li>
                <li>
                    <a href="">Скачать</a>
                </li>
                <li>
                    <a href="">Отзывы</a>
                </li>
            </ul>
            <button><span>Получить доступ</span></button>
        </nav>
    </header>
  )
}

export default Header
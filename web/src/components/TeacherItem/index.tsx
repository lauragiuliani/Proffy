import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherList() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/66958415?s=460&u=63541a8da0005167a4ddeffbd5e7c505182ca7d2&v=4" alt="Laura Giuliani" />
                <div>
                    <strong>Laura Giuliani</strong>
                    <span>História</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <br /><br />
                Tempora asperiores amet beatae optio quidem obcaecati. Obcaecati possimus fuga excepturi. Consequatur iure atque possimus harum esse, vero ex vel distinctio earum.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}


export default TeacherList;
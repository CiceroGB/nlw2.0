import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/63745509?s=460&u=e109864234f83424253a3ebe205835e0db7894e7&v=4" alt="Cicero"/>
        <div>
            <strong>Cicero</strong>
            <span>Química</span>
        </div>
        </header>
        <p>
            textão 
            <br/><br/>
            textão
        </p>
        <footer>
            <p>
                Preço/Hora
                <strong>R$80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;
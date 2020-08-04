import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'


function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/29117443?s=460&u=d355fe3eff687fded7559a0e16568c3722c21a7b&v=4" alt="Cristopher Paiva"/>
                        <div>
                            <strong>
                                Cristopher Paiva
                                <span> Químico </span>
                            </strong>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/> <br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>
                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar en contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;
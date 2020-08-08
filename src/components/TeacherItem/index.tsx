import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css'


export interface Teacher {

        id: number;
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whatsapp: number;
}
interface TeacherItemProps{
    teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    function createNewConnection(){
        api.post('connections',{
            user_id: teacher.id,
        })
    }
    return(
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name} />
                        <div>
                            <strong>
                                {teacher.name}
                                <span> {teacher.subject} </span>
                            </strong>
                        </div>
                    </header>
                    <p>{teacher.bio} </p>
                    <footer>
                        <p>
                            Preço/hora 
                            <strong>R$ {teacher.cost} </strong>
                        </p>
                        <a 
                            href={`https://wa.me/${teacher.whatsapp}`}       onClick={createNewConnection} target="_blank">
                            <img src={whatsappIcon} alt="Whatsapp"
                        />
                            Entrar en contato
                        </a>
                    </footer>
                </article>
    );
}

export default TeacherItem;
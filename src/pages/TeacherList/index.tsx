import React from 'react';



import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';

import Input from '../../components/Imput';
import Select from '../../components/Select';

import './styles.css';



function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form  id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Materia"
                        options={[
                            {value:'Artes', label:'Artes'},
                            {value:'Biologia', label:'Biologia'},
                            {value:'Ciencias', label:'Ciencias'},
                            {value:'Educaçao Fisica', label:'Educaçao Fisica'},
                            {value:'Fisica', label:'Fisica'},
                            {value:'Geografia', label:'Geografia'},
                            {value:'História', label:'História'},
                            {value:'Intormática', label:'Informática'},
                            {value:'Matemática', label:'Matemática'},
                            {value:'Química', label:'Química'},
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        options={[
                            {value:'0', label:'Domingo'},
                            {value:'1', label:'Segunda-feira'},
                            {value:'2', label:'Terça-feira'},
                            {value:'3', label:'Quarta-feira'},
                            {value:'4', label:'Quinta-feira'},
                            {value:'5', label:'Sexta-feira'},
                            {value:'6', label:'Sábado'},
                        ]}
                    />
                    <Input type="time"name="time" label="Hora"/>   
                </form>
            </PageHeader>


            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        
        </div>
    );
}

export default TeacherList;
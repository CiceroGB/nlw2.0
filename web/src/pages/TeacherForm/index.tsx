import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Select from '../../components/Select';


function TeacherForm() {


    const [scheduleItems, serScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItens() {
        serScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }

        ]);
    }


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que legal você dar aulas"
                description="Primeiro passo é preencher o formulário"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' }
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Horários Disponíveis
                    <button type="button" onClick={addNewScheduleItens}>
                            + Novo Horário
                            </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da Semana"
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda' },
                                        { value: '2', label: 'Terça' },
                                        { value: '3', label: 'Quarta' },
                                        { value: '4', label: 'Quinta' },
                                        { value: '5', label: 'Sexta' },
                                        { value: '6', label: 'Sábado' }

                                    ]}
                                />
                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>
                        )
                    })}

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Importante" />
                        Importante!<br />
                        Preencha todos os campos
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>



        </div>
    )
}

export default TeacherForm;
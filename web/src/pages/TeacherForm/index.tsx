import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Select from '../../components/Select';


function TeacherForm() {
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
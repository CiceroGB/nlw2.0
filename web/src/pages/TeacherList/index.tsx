import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';



function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis." >
                <form id="search-teachers">
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
                    <Input name="week_day" label="Dia da Semana" />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;
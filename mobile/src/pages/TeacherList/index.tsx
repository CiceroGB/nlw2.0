import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [isFiltersVisible, setIsFilterVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');




    function handleFilter() {
        setIsFilterVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        setIsFilterVisible(false);
        setTeachers(res.data);
    }



    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={
                    <BorderlessButton onPress={handleFilter}>
                        <Feather
                            name="filter"
                            size={20}
                            color="#FFF"
                        />
                    </BorderlessButton>
                }
            >

                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Matéria"
                            placeholderTextColor="#c1bccc"
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                    placeholder="Qual dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual hora?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtar</Text>

                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) => <TeacherItem key={teacher.id} teacher={teacher} />)}

            </ScrollView>

        </View>
    )
}

export default TeacherList;
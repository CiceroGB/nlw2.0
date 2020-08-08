import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" />
            <TeacherItem />
        </View>
    )
}

export default TeacherList;
import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { styles } from './styles';

export default function Congrats() {
    const navigation = useNavigation();

    const navigateToWelcome = useCallback(
        () => navigation.navigate('Welcome'),
        [navigation]
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Parabéns!</Text>
            <Text style={styles.text}>Agora é hora de descansar!</Text>
            <Button
                text="Estou pronto para trabalhar!"
                style={styles.button}
                onPress={navigateToWelcome}
            />
        </View>
    );
}

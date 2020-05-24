import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Poppins-Light',
        color: '#FB3D71',
        fontSize: 30,
    },
    text: {
        fontFamily: 'Poppins-Light',
        fontSize: 22,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FB3D71',
        bottom: 25,
        right: 25,
        paddingHorizontal: 35,
        paddingVertical: 15,
        borderRadius: 50,
    },
});

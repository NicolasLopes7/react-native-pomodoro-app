import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 25,
        paddingVertical: 0,
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 30,
        color: '#FB3D71',
        marginTop: 0,
        marginBottom: 30,
    },
    text: {
        fontFamily: 'Poppins-Light',
        fontSize: 27,
        textAlign: 'center',
        color: '#41414B',
        marginTop: 10,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#FB3D71',
        paddingHorizontal: 25,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        position: 'relative',
        top: 45,
        bottom: 0,
        right: -75,
    },

    textInput: {
        marginBottom: 10,
        width: 130,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
    },
});

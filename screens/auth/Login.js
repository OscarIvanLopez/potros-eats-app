import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'


const Login = ({ navigation }) => {

    //! State del usuario
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    // //! destructuracion del state
    const { name, email, password } = user;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar que no haya campos vacios
        if (email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }
        //pasarlo al action
        // iniciarSesion({ email, password });
    }

    return (
        // Container
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/ITSON_azul.png')}></Image>
            {/* Formulario container  */}
            <View style={styles.formContainer}>

                {/* header */}
                <Text style={styles.header}>Inicia Sesion</Text>

                {/* formulario */}
                <Text style={[styles.text, styles.textCenter]}>Porvafor llena todos los espacios</Text>

                <Text style={[styles.text, styles.textInput]}>Correo:</Text>
                <TextInput
                    style={styles.formInput}
                    value={email}
                    onChangeText={onSubmit}
                    placeholder={"  Correo Aqui"}
                >
                </TextInput>

                <Text style={[styles.text, styles.textInput]}>Password:</Text>
                <TextInput
                    style={styles.formInput}
                    value={password}
                    onChangeText={onSubmit}
                    placeholder={"  Password Aqui"}
                >
                </TextInput>

                {/* Buttons */}
                <View style={styles.buttonArea}>

                    <View style={styles.buttons}>

                        <Text style={styles.buttonText}>Ingresar</Text>

                    </View>
                </View>
                <View style={styles.newAccount}>
                    <Text style={styles.textNewAcount}>¿No tienes una cuenta?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('newAccount')
                        }}
                    >
                        <Text style={[styles.text, styles.textInput]}>Crea una</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {

        justifyContent: 'center',
        backgroundColor: '#0669B0',
        width: 380,
        borderRadius: 20
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    formInput: {
        width: 350,
        height: 50,
        borderRadius: 10,
        marginVertical: 20,
        marginLeft: 15,
        backgroundColor: '#fff'

    },
    header: {
        color: 'black',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 10,
        color: '#fff'
    },
    text: {
        color: '#fff',
        fontWeight: '700',

    },
    textInput: {
        marginLeft: 10
    },
    textCenter: {
        textAlign: 'center'
    },
    mt: {
        marginTop: 10
    },
    image: {
        marginTop: 100,
        width: 350,
        height: 150,
        resizeMode: 'contain'
    },
    newAccount: {
        flexDirection: 'row',
        marginBottom: 30
    },
    textNewAcount: {
        color: '#fff',
        marginLeft: 10
    },
    buttonArea: {
        alignItems: 'flex-end'
    },
    buttons: {
        borderRadius: 6,
        backgroundColor: '#fff',
        width: 150,
        height:50,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20

    },
    buttonText: {
        color: '#0669B0',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    },

});

export default Login;
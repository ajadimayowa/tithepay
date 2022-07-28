import React from 'react'

import { Pressable, StyleSheet, TextInput, View, Image, Text, Modal } from 'react-native'

function SignupForm(props) {
    return (
        <Modal visible={props.onModal} animationType='slide'>
            <View style={styles.container}>
                <Image source={require('../assets/images/icon.png')} />
                <Text style={styles.heading}>Create an Account</Text>
                <TextInput placeholder='Full Name' style={styles.input} />
                <TextInput placeholder='Email' style={styles.input} />
                <TextInput placeholder='Username' style={styles.input} />
                <TextInput placeholder='Password' style={styles.input} />
                <TextInput placeholder='Confirm Password' style={styles.input} />

                <Pressable style={({ pressed }) => pressed && styles.pressEffect}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white' }}>Create account</Text>
                    </View>
                </Pressable>

                <Text style={styles.paragraph}>By creating an account you agree to our
                    Terms of Service and Privacy Policy</Text>
                <Text>Existing User?</Text>
                <Pressable style={({ pressed }) => pressed && styles.pressEffect} onPress={props.toggleSignupModal}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
        </Modal>
    )
}


export default SignupForm;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        fontSize: 20,

    },
    image: {

    },
    input: {
        width: 280,
        height: 50,
        borderWidth: 1,
        borderColor: '#2699FB',
        padding: 10,
    },

    paragraph: {
        textAlign: 'center',
        paddingHorizontal: 50
    },

    button: {
        width: 330,
        height: 50,
        color: '#FFFFFF',
        backgroundColor: '#2699FB',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: '#005CAA',
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    pressEffect: {
        opacity: 0.8
    }


}
)
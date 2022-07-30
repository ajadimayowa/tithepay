import React, { useState } from 'react'

import { Pressable, StyleSheet, TextInput, View, Image, Text, Modal } from 'react-native'

function AddMember(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function catchUsername(usernameInput) {
        setUsername(usernameInput)
        // console.log(username)

    }
    function catchPassword(passwordInput) {
        setPassword(passwordInput)
        // console.log(password)
    }

    function passCredentials() {

        if (username != '' && password != '') {
            props.catchCredentials(username, password)
            setUsername('')
            setPassword('')
            props.offMemberModal()
        }
        else {
            console.log('No Input Entered')
        }
    }


    return (
        <Modal visible={props.memberModal} animationType='slide'>
            <View style={styles.container}>
                <Image source={require('../assets/images/icon.png')} style={{ width: 200, height: 150 }} />
                <Text style={styles.heading}>Add New Member</Text>
                <TextInput placeholder='First Name' style={styles.input} onChangeText={catchUsername}
                    value={username} />
                <TextInput placeholder='Last Name' style={styles.input} onChangeText={catchPassword}
                    value={password} />
                {/* <Text>Forgot Password?</Text> */}

                <Pressable style={({ pressed }) => pressed && styles.pressEffect} onPress={passCredentials}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white' }}>Add Member</Text>
                    </View>
                </Pressable>
                {/* <Text>Don’t have an account with us?</Text> */}

                {/* <Pressable style={({ pressed }) => pressed && styles.pressEffect} onPress={props.toggleSignupModal}>
                    <Text style={styles.buttonText}>Signup</Text>
                </Pressable> */}
            </View>
        </Modal>
    )
}


export default AddMember;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 150,
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




import { View, Text, StyleSheet, Pressable } from "react-native";

function UserCard(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.serial}>{props.serial}</Text>
            <View style={styles.details}>
                <Text style={styles.name} >{props.name}{' '}{props.lname}</Text>
                <Text style={styles.id}>ID: {props.id}</Text>
            </View>
            <Pressable style={({ pressed }) => pressed && styles.effect}
                onPress={props.removeUser.bind(this, props.id)}>
                <View style={styles.button}>
                    <Text style={styles.remove}>X</Text>
                </View>
            </Pressable>


        </View>
    )
}

export default UserCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: '#057ed1',
        borderRadius: 5,
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',

    },

    serial: {
        fontSize: 20,
        color: '#fff'
    },

    details: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        // backgroundColor: 'red',
        width: '70%'
    },

    name: {
        color: '#fff',
        fontSize: 25,
        paddingRight: 10,

    },
    id: {
        color: '#f9f2a0'
    },

    effect: {
        opacity: 0.8
    },

    button: {
        borderRadius: 5,
        backgroundColor: '#ed1c24',
        width: 30,
        alignItems: 'center'
    },

    remove: {
        fontSize: 30,
        color: 'white'
    }

})
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import AddMember from './Components/AddMember';
import SignupForm from './Components/SignupForm';
import UserCard from './Components/UserCard';

export default function App() {
  const [memberForm, setmemberForm] = useState(false)
  const [user, regUser] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function togglememberModal() {
    setmemberForm(!memberForm)
  }

  function catchCredentials(passedUsername, passedPassword) {
    regUser((currentList) => [...currentList, {
      username: passedUsername, password: passedPassword,
      id: Math.floor(Math.random() * 100000 + 1).toString()
    }])
    console.log('sent from login component')
    console.log(passedUsername)
    console.log(passedPassword)
    console.log(user.map((users) => users.username))

  }

  function removeUser(id) {
    regUser(
      (curentList) => {
        return curentList.filter(
          (newList) => newList.id != id
        )
      }
    )

    console.log(id)

  }

  return (
    <>

      <View style={styles.introPart}>
        {/* <Image source={require('./assets/images/icon.png')} /> */}
        <Text style={styles.header}>Simple Tithe Manager</Text>
      </View>

      <View style={styles.container}>

        <StatusBar style="dark" />

        <View style={styles.actionSection}>

          <Pressable style={({ pressed }) => pressed && styles.effect} onPress={togglememberModal}>
            <View style={styles.button}>
              <Image source={require('./assets/images/peopleicon.png')} style={{ width: 60, height: 40 }} />
              <Text style={styles.text}>Add Member</Text>
            </View>
          </Pressable>

          <Pressable style={({ pressed }) => pressed && styles.effect}>
            <View style={styles.button}>
              <Image source={require('./assets/images/activity.png')} style={{ width: 40, height: 40 }} />
              <Text style={styles.text}>Track Record</Text>
            </View>
          </Pressable>

        </View>
        <AddMember memberModal={memberForm} catchCredentials={catchCredentials} offMemberModal={togglememberModal} />
        <SignupForm onModal={togglememberModal} toggleSignupModal={togglememberModal} />

        <View style={styles.membersSection}>
          <FlatList data={user} renderItem={(users) => <UserCard removeUser={removeUser} name={users.item.username} lname={users.item.password} id={users.item.id}
            serial={users.index + 1} />} />
        </View>

      </View>
      <View style={styles.paymentSection}>
        <View>
          <Text>
            Bible verse goes here
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  introPart: {
    flex: 1,
    width: '100%',
    backgroundColor: '#057ed1',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 25,
    color: 'white'
  },

  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    width: '100%',
    // backgroundColor: 'green',

  },

  paymentSection: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center'
  },

  actionSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // backgroundColor: 'red',
    paddingVertical: 20

  },

  icon: {
    width: '50%',
    height: 40,
    padding: 25,

  },
  button: {
    borderRadius: 5,
    backgroundColor: '#057ed1',
    width: 140,
    height: 100,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 17
  },
  effect: {
    opacity: 0.8
  },
  text: {
    fontSize: 18,
    color: 'white'
  },
  membersSection: {
    width: '100%'
  }
});

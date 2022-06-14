import * as React from 'react'
import useState from "react"
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import { logoutUser } from '../api/auth-api'
import firebase, { app } from 'firebase/app'
import 'firebase/auth'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert, Picker, View, StyleSheet  } from "react-native";


function getUsername(){
  const username = firebase.auth().currentUser.displayName;
  const email = firebase.auth().currentUser.email;

  alert("Uporabniško ime: " + username + "\nEmail: " + email)
}

function HomeScreen() {
  return (
  <Background>
    <Logo />
    <Header></Header>
    <Button mode="outlined" onPress={showClubs1}>
        1. Liga
    </Button>
    <Button mode="outlined" onPress={showClubs2}>
        2. Liga
    </Button>
  </Background>
  );
}

function SettingsScreen() {
  return (
    <Background>
      <Logo />
      <Header></Header>
      <Button mode="outlined" onPress={getUsername}>
        Informacije
      </Button>
      <Button mode="outlined" onPress={logoutUser}>
        Odjava
      </Button>
    </Background>
  );
}

function PlayersScreen() {
  return (
  <Background>
    <Logo />
    <Header></Header>
    <Button mode="outlined" onPress={showScorers1}>
        1. Liga
    </Button>
    <Button mode="outlined" onPress={showScorers2}>
        2. Liga
    </Button>
  </Background>
  );
}

const Tab = createBottomTabNavigator();

/************************      API CALL     *************************** */ 

/************************************************************************/
/************************      showScorers1     *************************/
/************************************************************************/

/* CHANGE IP  */
let ip = '192.168.1.214';


function showScorers1() {

  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
if (request.readyState !== 4) {
  return;
}


if (request.status === 200) {
  // generirajmo tabelo
  /********************  DEBUG  *********************** */
  //alert(odgovorJSON[0].ime + " " + odgovorJSON[0].priimek + " " + odgovorJSON[0].gol+"\n"+
  //odgovorJSON[1].ime + " " + odgovorJSON[1].priimek + " " + odgovorJSON[1].gol)
  //console.log('success', request.responseText);
  let odgovorJSON = JSON.parse(request.responseText);
  let count = odgovorJSON.length;
  let tabela = "    IME   PRIIMEK   GOL";

  for(let i=0;i<count;i++){
    let mesto = i + 1;
    tabela = tabela + "\n" + mesto.toString() + "." + " " + odgovorJSON[i].ime + "   " + odgovorJSON[i].priimek + "   " + odgovorJSON[i].gol;
  }

  Alert.alert(
    "Lestvica strelcev",
    tabela,
    [
      {
        text: "NAZAJ",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "Za izhod pritisni 'nazaj'."
        ),
    }
  );
} else {
  console.warn('error');
  alert("not 200")
}
};


request.open('GET', 'http://' + ip + '/Trim-liga-spletna-aplikacija/ligaAPI/lestvica_strelci/1');
request.send();


}

/************************************************************************/
/************************      showScorers2     *************************/
/************************************************************************/

function showScorers2() {

  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
if (request.readyState !== 4) {
  return;
}


if (request.status === 200) {
  // generirajmo tabelo
  /********************  DEBUG  *********************** */
  //alert(odgovorJSON[0].ime + " " + odgovorJSON[0].priimek + " " + odgovorJSON[0].gol+"\n"+
  //odgovorJSON[1].ime + " " + odgovorJSON[1].priimek + " " + odgovorJSON[1].gol)
  //console.log('success', request.responseText);
  let odgovorJSON = JSON.parse(request.responseText);
  let count = odgovorJSON.length;
  let tabela = "    IME   PRIIMEK   GOL";

  for(let i=0;i<count;i++){
    let mesto = i + 1;
    tabela = tabela + "\n" + mesto.toString() + "." + " " + odgovorJSON[i].ime + "   " + odgovorJSON[i].priimek + "   " + odgovorJSON[i].gol;
  }

  Alert.alert(
    "Lestvica strelcev",
    tabela,
    [
      {
        text: "NAZAJ",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
} else {
  console.warn('error');
  alert("not 200")
}
};


request.open('GET', 'http://' + ip + '/Trim-liga-spletna-aplikacija/ligaAPI/lestvica_strelci/2');
request.send();


}

/************************************************************************/
/************************      showClubs1    ****************************/
/************************************************************************/

function showClubs1() {

  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
if (request.readyState !== 4) {
  return;
}


if (request.status === 200) {
  // generirajmo tabelo
  /********************  DEBUG  *********************** */
  //alert(odgovorJSON[0].ime + " " + odgovorJSON[0].priimek + " " + odgovorJSON[0].gol+"\n"+
  //odgovorJSON[1].ime + " " + odgovorJSON[1].priimek + " " + odgovorJSON[1].gol)
  //console.log('success', request.responseText);
  let odgovorJSON = JSON.parse(request.responseText);
  let count = odgovorJSON.length;
  let tabela = "#   KLUB       TOČKE";

  for(let i=0;i<count;i++){
    let mesto = i + 1;
    tabela = tabela + "\n" + mesto.toString() + "." + "  " + odgovorJSON[i].klub + "   " + odgovorJSON[i].točke;
  }

  Alert.alert(
    "Ligaška lestvica",
    tabela,
    [
      {
        text: "NAZAJ",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
} else {
  console.warn('error');
  alert("not 200")
}
};
//change IP
request.open('GET', 'http://' + ip + '/Trim-liga-spletna-aplikacija/ligaAPI/lestvica_liga/1');
request.send();

}


/************************************************************************/
/************************      showClubs2    ****************************/
/************************************************************************/

function showClubs2() {

  var request = new XMLHttpRequest();
  request.onreadystatechange = (e) => {
if (request.readyState !== 4) {
  return;
}


if (request.status === 200) {
  // generirajmo tabelo
  /********************  DEBUG  *********************** */
  //alert(odgovorJSON[0].ime + " " + odgovorJSON[0].priimek + " " + odgovorJSON[0].gol+"\n"+
  //odgovorJSON[1].ime + " " + odgovorJSON[1].priimek + " " + odgovorJSON[1].gol)
  //console.log('success', request.responseText);
  let odgovorJSON = JSON.parse(request.responseText);
  let count = odgovorJSON.length;
  let tabela = "    KLUB   TOČKE";

  for(let i=0;i<count;i++){
    let mesto = i + 1;
    tabela = tabela + "\n" + mesto.toString() + "." + " " + odgovorJSON[i].klub + "   " + odgovorJSON[i].točke;
  }

  Alert.alert(
    "Ligaška lestvica",
    tabela,
    [
      {
        text: "NAZAJ",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );
} else {
  console.warn('error');
  alert("not 200")
}
};
//change IP
request.open('GET', 'http://' + ip + '/Trim-liga-spletna-aplikacija/ligaAPI/lestvica_liga/2');
request.send();

}

/************************      END OF API CALL     ****************************/ 


export default function Dashboard() {

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Lestvica') {
              iconName = focused
                ? 'ios-football'
                : 'ios-football-outline';
            } else if (route.name === 'Strelci') {
              iconName = focused 
              ? 'ios-man' 
              : 'ios-man-outline';
            } else if (route.name == 'Nastavitve') {
              iconName = focused 
              ? 'ios-settings' 
              : 'ios-settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Lestvica" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Strelci" component={PlayersScreen}></Tab.Screen>
        <Tab.Screen name="Nastavitve" component={SettingsScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
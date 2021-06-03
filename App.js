import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Authentification from './Components/Authentification'
import Store from './Store/configureStore'
import {Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store={Store}>
      <Authentification/>
    </Provider>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000000'
  },
});

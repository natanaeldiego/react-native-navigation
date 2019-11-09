/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import logo from '../assets/img/gh-vs-mail.png';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.sectionTopo}>
            <Image source={logo} style={styles.imagem} />
          </View>

          <View style={styles.sectionContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Digite seu Email aqui!"
                keyboardType="email-address"
                onChangeText={e => setEmail(e)}
                value={email}
              />

              <View style={styles.buttonContainer}>
                <Button title="Enviar" color="#FF9800" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'column',
  },
  sectionTopo: {
    flex: 2,
    paddingHorizontal: 24,
  },
  sectionContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.black,
    alignSelf: 'center',
  },
  subSectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: 300,
    marginTop: 10,
  },
  imagem: {
    width: 350,
    height: 158,
    alignSelf: 'center',
    marginTop: 60,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    width: 300,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
  },
});

export default ForgotPassword;

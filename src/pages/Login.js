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
  Text,
  TextInput,
  Button,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import logo from '../assets/img/github.png';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <>
      <StatusBar backgroundColor="#e39017" barStyle="dark-content" />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.sectionTopo}>
            <Image source={logo} style={styles.imgem} />
          </View>

          <View style={styles.sectionContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={e => setEmail(e)}
                value={email}
              />

              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={e => setSenha(e)}
                value={senha}
              />

              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => navigation.navigate('Dashboard')}
                  color="#FF9800"
                  title="Entrar"
                />
              </View>
              <View style={styles.createForgot}>
                <Text
                  onPress={() => navigation.navigate('CreateUser')}
                  style={styles.subSectionTitle}>
                  Criar usuário
                </Text>
                <Text
                  onPress={() => navigation.navigate('ForgotPassword')}
                  style={styles.subSectionTitle}>
                  Recuperar senha?
                </Text>
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
  imgem: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 60,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    width: 300,
    marginTop: 10,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
  },
  createForgot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});

export default Login;

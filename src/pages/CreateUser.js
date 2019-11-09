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

import logo from '../assets/img/github2.png';

const CreateUser = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.sectionTopo}>
            <Image source={logo} style={styles.logo} />
          </View>

          <View style={styles.sectionContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Digite seu Nome"
                onChangeText={e => setNome(e)}
                value={nome}
              />

              <TextInput
                style={styles.input}
                placeholder="Digite seu Email"
                keyboardType="email-address"
                onChangeText={e => setEmail(e)}
                value={email}
              />

              <TextInput
                style={styles.input}
                placeholder="Digite sua Senha"
                onChangeText={e => setSenha(e)}
                value={senha}
              />

              <TextInput
                style={styles.input}
                placeholder="Confirme sua Senha"
                onChangeText={e => setConfSenha(e)}
                value={confSenha}
              />

              <View style={styles.buttonContainer}>
                <Button title="Cadastrar" color="#FF9800" />
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
  logo: {
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
});

export default CreateUser;

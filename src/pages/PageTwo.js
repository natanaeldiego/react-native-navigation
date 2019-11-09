import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import logo from '../assets/img/sucesso.png';

const PageTwo = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.sectionTopo}>
        <Image source={logo} style={styles.imagem} />
        <Text style={styles.text}>
          {' '}
          Se você chegou até aqui é sinal que eu consegui ajudar alguém!!!{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  sectionTopo: {
    flex: 1,
    paddingHorizontal: 24,
  },
  imagem: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 60,
  },
  text: {
    fontSize: 23,
    alignSelf: 'center',
  },
});

export default PageTwo;

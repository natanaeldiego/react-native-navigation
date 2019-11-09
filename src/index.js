import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateUser from './pages/CreateUser';
import ForgotPassword from './pages/ForgotPassword';
import PageTwo from './pages/PageTwo';

const StackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      headerTransparent: true,
      hideStatusBar: true,
    }),
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({navigation}) => ({
      headerTransparent: true,
      hideStatusBar: true,
      headerLeft: null,
    }),
  },
  CreateUser: {
    screen: CreateUser,
    navigationOptions: ({navigation}) => ({
      title: 'Criar usuário',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: ({navigation}) => ({
      title: 'Recuperar senha',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  PageTwo: {
    screen: PageTwo,
    navigationOptions: ({navigation}) => ({
      title: 'Parabéns',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

export default createAppContainer(StackNavigator);

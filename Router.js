import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import Second from './Second';
import Third from './Third';
import Confirmation from './Confirmation';

const Router = createStackNavigator(
  {
    App,
    Second,
    Third,
    Confirmation
  },
  {
    initialRouteName: 'App',
  }
);

export default createAppContainer(Router);

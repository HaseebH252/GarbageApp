import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import Second from './Second';
import Third from './Third';

const Router = createStackNavigator(
  {
    App,
    Second,
    Third
  },
  {
    initialRouteName: 'App',
  }
);

export default createAppContainer(Router);

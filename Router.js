import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import Second from './Second';
import Third from './Third';
import ProductConfirmation from './ProductConfirmation';
import Confirmation from './Confirmation';

const Router = createStackNavigator(
  {
    App,
    Second,
    ProductConfirmation,
    Third,
    Confirmation
  },
  {
    initialRouteName: 'App',
  }
);

export default createAppContainer(Router);

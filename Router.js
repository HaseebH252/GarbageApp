import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import Second from './Second';
import Third from './Third';
import ProductConfirmation from './ProductConfirmation';
import Confirmation from './Confirmation';
import EmailConfirm from './emailConfirm';
import EmailAdd from './EmailAdd';
import FinalPage from './FinalPage';

const Router = createStackNavigator(
  {
    App,
    Second,
    ProductConfirmation,
    Third,
    Confirmation,
    EmailAdd,
    EmailConfirm,
    FinalPage
  },
  {
    initialRouteName: 'App',
  }
);

export default createAppContainer(Router);

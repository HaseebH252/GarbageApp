/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, H3, Container, Content, Header, Form, Item, Input, Label, Icon, Picker} from 'native-base';
import firebase from 'react-native-firebase';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  ref = firebase.firestore().collection('productInfo');

  state = {
    productInfo: []
  };

  static navigationOptions =
  {
    title: 'Confirmation',
    headerStyle:
    {
      backgroundColor: 'f4511e',
    },
    headerTintColor: 'black'
  };

  addToDatabase(productName,descriptionName,conditionChange,pickupDate,productPhoto) {
    this.ref.add({
      prodName: productName,
      prodDesc: descriptionName,
      prodCond: conditionChange,
      prodDate: pickupDate,
      prodPhoto: productPhoto

    });
  }



  render() {





    const productName = this.props.navigation.getParam('productName', 'N/A');
    const descriptionName = this.props.navigation.getParam('descriptionName', 'N/A');
    const conditionChange = this.props.navigation.getParam('conditionChange', 'N/A');
    const pickupDate = this.props.navigation.getParam('pickupDate', 'N/A');
    const productPhoto = this.props.navigation.getParam('productPhoto', 'N/A');


    return (
      <Container>
        <Content contentContainerStyle={styles.content}>

          <Text style = {styles.h3Text}>Product Name: {productName}</Text>
          <Text style = {styles.h3Text}>Product Description: {descriptionName}</Text>
          <Text style = {styles.h3Text}>Product Condition: {conditionChange}</Text>
          <Text style = {styles.h3Text}>Product Pickup Date: {pickupDate}</Text>
          <Text style = {styles.h3Text}>Product Photo URI: {productPhoto}</Text>



          <View style={styles.buttonContainer}>
            <Button
            bordered
            danger
            style={styles.submitButton}
            onPress={() => this.props.navigation.navigate('Second')}>

              <Text style={styles.buttonText}>No I Want to Change Somthing</Text>
            </Button>

            <Button bordered success
            onPress={() => {
              this.props.navigation.navigate('Third');
              this.addToDatabase(productName,descriptionName,conditionChange,pickupDate,productPhoto);
            }}
            style={styles.submitButton}>
              <Text style={styles.buttonText}>Continue</Text>
            </Button>
          </View>


        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    paddingHorizontal: '5%',
    flexGrow: 1,
    backgroundColor: "#086826"
  },
  buttonText: {
    alignSelf: 'center'
    },
  h3Text:{
    fontSize: 18,
    color: 'white',
    paddingVertical: 5,
    marginTop: 10
  },
  submitButton:
    {
      backgroundColor: "#ffffff",
      marginTop: "auto",
      padding: 15,
      flex: 1,
      marginRight: 10,
      marginBottom: 10
    },
    buttonContainer: {
      flexDirection: 'row',
      flexGrow: 1,
    }

});

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
  ref = firebase.firestore().collection('customerInfo');

  state = {
    customerInfo: []
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

  addToDatabase(fullName,contactNumber,contactEmail,streetAddress,city,zipCode,selectedState) {
    this.ref.add({
      custName: fullName,
      custPhone: contactNumber,
      custEmail: contactEmail,
      custStreet: streetAddress,
      custCity: city,
      custZip: zipCode,
      custState: selectedState

    });
  }




  render() {
    const fullName = this.props.navigation.getParam('fullName', 'N/A');
    const contactNumber = this.props.navigation.getParam('contactNumber', 'N/A');
    const contactEmail = this.props.navigation.getParam('contactEmail', 'N/A');
    const streetAddress = this.props.navigation.getParam('streetAddress', 'N/A');
    const city = this.props.navigation.getParam('city', 'N/A');
    const zipCode = this.props.navigation.getParam('zipCode', 'N/A');
    const selectedState = this.props.navigation.getParam('selectedState', 'N/A');


    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <Text style = {styles.h3Text}>Name: {fullName}</Text>
          <Text style = {styles.h3Text}>Contact Number: {contactNumber}</Text>
          <Text style = {styles.h3Text}>Contact Email: {contactEmail}</Text>
          <Text style = {styles.h3Text}>Street Address: {streetAddress}</Text>
          <Text style = {styles.h3Text}>City: {city}</Text>
          <Text style = {styles.h3Text}>Zip Code: {zipCode}</Text>
          <Text style = {styles.h3Text}>State: {selectedState}</Text>




          <View style={styles.buttonContainer}>
            <Button
            bordered
            danger
            style={styles.submitButton}
            onPress={() => {
                this.props.navigation.navigate('Third');
              }}>

              <Text style={styles.buttonText}>No I Want to Change Somthing</Text>
            </Button>

            <Button bordered success style={styles.submitButton}
            onPress={() => {
                this.addToDatabase(fullName,contactNumber,contactEmail,streetAddress,city,zipCode,selectedState);
              }}>
              <Text style={styles.buttonText}>Yup Looks Good</Text>
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

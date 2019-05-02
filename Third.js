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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions =
  {
    title: 'Customer Info',
    headerStyle:
    {
      backgroundColor: 'f4511e',
    },
    headerTintColor: 'black'
  };

  state = {
    fullName: '',
    contactNumber: '',
    contactEmail: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    selectedState: 'New Jersey',
  };

  onNameChange = (fullName) => {
    this.setState({ fullName: fullName });
  }
  onContactNumberChange = (contactNumber) => {
    this.setState({ contactNumber: contactNumber });
  }
  onContactEmailChange = (contactEmail) => {
    this.setState({ contactEmail: contactEmail });
  }
  onStreetAddressChange = (streetAddress) => {
    this.setState({ streetAddress: streetAddress });
  }
  onCityChange = (city) => {
    this.setState({ city: city });
  }
  onZipCodeChange = (zipCode) => {
    this.setState({ zipCode: zipCode });
  }
  onselectedStateChange = (selectedState) => {
    this.setState({ selectedState: selectedState });
  }

  render() {
    return (
        <Container>
          <Content contentContainerStyle={styles.content}>

            <Item regular style={styles.descriptionText}>
              <Input
                value={this.state.fullName}
                placeholder='Full Name'
                onChangeText={this.onNameChange}
              />
            </Item>

            <Item regular style={styles.descriptionText}>
              <Input
                value={this.state.contactNumber}
                placeholder='Contact Number'
                keyboardType = "phone-pad"
                onChangeText={this.onContactNumberChange}
              />
            </Item>

            <Item regular style={styles.descriptionText}>
              <Input
                value={this.state.contactEmail}
                placeholder='Contact Email'
                keyboardType = "email-address"
                textContentType = "emailAddress"
                onChangeText={this.onContactEmailChange}
              />
            </Item>

            <Item regular style={styles.descriptionText}>
              <Input
                value={this.state.streetAddress}
                placeholder='Street Address'
                onChangeText={this.onStreetAddressChange}
              />
            </Item>

            <Item regular style={styles.descriptionText}>
              <Input
                value={this.state.city}
                placeholder='City'
                onChangeText={this.onCityChange}
              />
            </Item>

            <Item regular style={styles.descriptionText}>
              <Input
                value={this.state.zipCode}
                placeholder='ZIP Code'
                keyboardType = "number-pad"
                maxLength = {5}
                onChangeText={this.onZipCodeChange}
              />
            </Item>

            <Item regular style={styles.descriptionText}>
              <Input
                disabled
                //value={this.state.selectedState}
                placeholder='State -- Disabled. Default New Jersey'
                //onChangeText={this.onselectedStateChange}
              />
            </Item>

            <Button
              style = {styles.submitButton}
              block
              success
              onPress=
              {() => this.props.navigation.navigate( 'Confirmation',
                {
                  fullName: this.state.fullName,
                  contactNumber: this.state.contactNumber,
                  contactEmail: this.state.contactEmail,
                  streetAddress: this.state.streetAddress,
                  city: this.state.city,
                  zipCode: this.state.zipCode,
                  selectedState: this.state.selectedState
                }
            )}>
              <Text style= {styles.buttonText}> Almost There</Text>
            </Button>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row'
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 24
    },
submitButton:
  {
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: "#000"

  },
  content: {
    paddingHorizontal: '5%',
    flexGrow: 1,
    backgroundColor: "#086826"
  },

  descriptionText:{
    marginTop: 'auto',
    marginBottom: 30,
    backgroundColor: "#ffffff"
  },

});

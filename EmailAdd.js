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
    title: 'Add to Mail List',
    headerStyle:
    {
      backgroundColor: 'f4511e',
    },
    headerTintColor: 'black'
  };

  state = {
    fullName: '',
    contactEmail: '',
    preferredCounty: '',
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
  onpreferredCountyChange = (preferredCounty) => {
    this.setState({ preferredCounty: preferredCounty });
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
                value={this.state.contactEmail}
                placeholder='Contact Email'
                keyboardType = "email-address"
                textContentType = "emailAddress"
                onChangeText={this.onContactEmailChange}
              />
            </Item>


            <Item regular style={styles.descriptionText}>
              <Input
                value={this.state.preferredCounty}
                placeholder='Enter Preffered County'
                onChangeText={this.onpreferredCountyChange}
              />
            </Item>

            <Button
              style = {styles.submitButton}
              block
              success
              onPress=
              {() => this.props.navigation.navigate( 'EmailConfirm',
                {
                  fullName: this.state.fullName,
                  contactEmail: this.state.contactEmail,
                  preferredCounty: this.state.preferredCounty
                }
            )}>
              <Text style= {styles.buttonText}> Confirmation Page</Text>
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
    color: 'black'
    },
  content: {
    paddingHorizontal: '5%',
    flexGrow: 1,
    backgroundColor: "#086826"
  },
  submitButton:{
    marginTop: "auto",
    marginBottom: 40,
    backgroundColor: "#ffffff"
  },
  descriptionText:{
    marginTop: 'auto',
    marginBottom: 30,
    backgroundColor: "#ffffff"
  },

});

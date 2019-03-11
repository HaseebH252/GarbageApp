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
import DatePicker from 'react-native-datepicker';

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

  constructor(props)
  {
    super(props);
    this.state = {
      selected: undefined,
      date: "02-03-2019"
    };
  }
  onValueChange(value: string)
  {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
        <Container>
          <Content contentContainerStyle={styles.content}>
            <Item regular style={styles.descriptionText}>
              <Input placeholder='Full Name'/>
            </Item>
            <Item regular style={styles.descriptionText}>
                  <Input placeholder='Contact Number' />
            </Item>
            <Item regular style={styles.descriptionText}>
              <Input placeholder='Contact Email'/>
            </Item>
            <Item regular style={styles.descriptionText}>
                  <Input placeholder='Street Address' />
            </Item>
            <Item regular style={styles.descriptionText}>
              <Input placeholder='City'/>
            </Item>
            <Item regular style={styles.descriptionText}>
                  <Input placeholder='ZIP Code' />
            </Item>
            <Item regular style={styles.descriptionText}>
                  <Input disabled placeholder='New Jersey' />
            </Item>
            <Button style = {styles.submitButton} block success
              onPress={() => this.props.navigation.navigate('App')}>
              <Text> Contine to Payment Portal</Text>
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

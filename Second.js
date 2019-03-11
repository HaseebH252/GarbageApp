/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

/**
DATE PICKER INSTALL
 https://aboutreact.com/react-native-datepicker/

cd ProjectName

npm install react-native-datepicker --save

onPress={() => this.props.navigation.navigate('Second')}>


**/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, H2, H3, Container, Content, Header, Form, Item, Input, Label, Icon, Picker, DatePicker} from 'native-base';
// import DatePicker from 'react-native-datepicker';

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
    title: 'Product Details',
    headerStyle:
    {
      backgroundColor: 'f4511e',
    },
    headerTintColor: 'black'
  };

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  onValueChange(value: string)
  {
    this.setState({selected: value});
  }

  render() {
    return (
        <Container>
          <Content contentContainerStyle={styles.content}>

            <Item regular style={styles.searchBar}>
              <Input placeholder="Enter The Product's Name"/>
            </Item>

            <Button style = {styles.uploadButton} block success>
              <Text>Upload a Photo of the Item</Text>
            </Button>


                <Item regular style={styles.descriptionText}>
                  <Input placeholder='Write An Awesome Description' />
                </Item>


                <View style = {styles.buttonContainer}>
                <H3 style = {styles.h3Text}>Condition</H3>

                </View>



                <Item regular style={styles.descriptionText}>
                  <Input placeholder='Tell Us More About The Condition' />
                </Item>

                <H3 style = {styles.h3Text}>Pickup Date </H3>
                  <Item regular style={styles.descriptionText}>
                    <Input placeholder='Format (xx/xx/xxxx)' />
                  </Item>







            <Button style = {styles.submitButton} block success
              onPress={() => this.props.navigation.navigate('Third')}>
              <Text> Next: Customer Info</Text>
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
  uploadButton:{
    marginTop: "auto",
    marginBottom: 40,
    backgroundColor: "#ffffff",
    width: '65%',
    alignSelf: 'center'

  },
  descriptionText:{
    marginTop: 'auto',
    marginBottom: 30,
    backgroundColor: "#ffffff"
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 3
  },
  whiteText: {
    color: "white"
  },
  conditionDropdown: {
    backgroundColor: 'white',
    flex: 1,
    alignSelf: 'center'

  },
  h3Text:{
    paddingVertical: '2%',
    fontSize: 18,
    color: 'white'
  },
  dateTest: {
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: 'black'
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Container, Header, Content,
         Button, Form, Input, Item,
         Icon, H1 , Thumbnail } from 'native-base';
import { Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Second extends Component<Props>
  {
   static navigationOptions =
    {
     title: 'Home',
     headerStyle:
      {
       backgroundColor: '#ffffff',
      },
     headerTintColor: 'green'
    };
 render() {
    const logo = "https://firebasestorage.googleapis.com/v0/b/junkapp-afd41.appspot.com/o/logo.png?alt=media&token=c1b0fa6c-28f2-4cec-8189-a08fe7cd59a9";
    const icon = "https://firebasestorage.googleapis.com/v0/b/junkapp-afd41.appspot.com/o/icon.png?alt=media&token=20942027-daaf-4782-bd7d-6860e21d83c2";
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <Thumbnail square large source={{uri: logo}} style={{ height: 40, width: 350}}/>
          <Thumbnail square large source={{uri: icon}} style={{ height: 400, width: 350}}/>
          <Button style = {styles.submitButton} block success
                onPress={() => this.props.navigation.navigate('Second')}>
               <Text style= {styles.buttonText}> Click Here to Begin Your Hunt </Text>
          </Button>

          <Button style = {styles.submitButton} block success
                onPress={() => this.props.navigation.navigate('EmailAdd')}>
               <Text style= {styles.buttonText}> Click Here to Get Added to Our Email List </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
buttonContainer:
  {
    flexDirection: 'row'
  },

Item:
  {
    width: '95%',
    marginTop: 100,
    marginBottom: 50,
    backgroundColor: "#ffffff",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 3,
    justifyContent: 'center',
  },

content:
  {
    paddingHorizontal: '5%',
    flexGrow: 1,
    backgroundColor: "#086826"
  },
  buttonText: {
    alignSelf: 'center',
    color: 'black'
    },
submitButton:
  {
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: "#ffffff"

  },
});

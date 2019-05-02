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
     title: 'Rated #1 Junk Collection App in the World',
     headerStyle:
      {
       backgroundColor: '#ffffff',
      },
     headerTintColor: 'green'
    };
 render() {
    const uri = "https://firebasestorage.googleapis.com/v0/b/junkapp-afd41.appspot.com/o/icon.png?alt=media&token=4ae87430-6d43-419c-84b1-a617f3f51f12";
    const logo = "https://firebasestorage.googleapis.com/v0/b/junkapp-afd41.appspot.com/o/logo%20(1).png?alt=media&token=32b3e4fb-f63e-4fae-8e1c-18eb33bc37c4";
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>

                <Thumbnail square large source={{uri: logo}} style={{
                  height: 55,
                  width: 340,
                  marginTop: 100,
                  marginBottom: 30

                  }}/>

          <Thumbnail square large source={{uri: uri}} style={{ height: 400, width: 350}}/>
          <Button style = {styles.submitButton} block success
                onPress={() => this.props.navigation.navigate('Second')}>
               <Text style= {styles.buttonText}>Begin Your Hunt </Text>
          </Button>

          <Button style = {styles.submitButton} block success
                onPress={() => this.props.navigation.navigate('EmailAdd')}>
               <Text style= {styles.buttonText}> Join Our Mailing List </Text>
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

content:
  {
    paddingHorizontal: '5%',
    flexGrow: 1,
    backgroundColor: "#086826"
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
});

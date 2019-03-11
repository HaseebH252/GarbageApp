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
    const uri = "https://www.junkbgoneva.com/wp-content/uploads/2017/10/junk-removal-image.png";
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <Item regular style ={styles.Item}>
                <H1>Junk BeGone</H1>
          </Item>
          <Thumbnail square large source={{uri: uri}} style={{ height: 400, width: 350}}/>
          <Button style = {styles.submitButton} block success
                onPress={() => this.props.navigation.navigate('Second')}>
               <Text> Click Here to Begin Your Hunt </Text>
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
submitButton:
  {
    marginTop: 50,
    marginBottom: 40,
    backgroundColor: "#ffffff"
  },
});

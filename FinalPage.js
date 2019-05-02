
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Container, Header, Content,
         Button, Form, Input, Item,
         Icon, H1, Thumbnail, Toast } from 'native-base';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

type Props = {};
export default class App extends Component<Props> {
  state = {
    visible: false,
  };
  static navigationOptions =
  {
    title: 'Final Page',
    headerStyle:
    {
      backgroundColor: 'f4511e',
    },
    headerTintColor: 'black'
  };


  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>

        <Text style={styles.h3Text}>Thank you for your service</Text>


        <View style={styles.buttonContainer}>
          <Button
          danger
          style={styles.submitButton}
          onPress={() => {
              this.props.navigation.navigate('App');
            }}>

            <Text style={styles.buttonText}>Back To Home</Text>
          </Button>

          <Button success style={styles.submitButton}
          onPress={() => this.setState({ visible: true })}>

            <Text style={styles.buttonText}>About Us</Text>
          </Button>
        </View>



          <View>
              <Dialog
                visible={this.state.visible}
                dialogAnimation={new SlideAnimation({
                  slideFrom: 'bottom',
                })}
              >
                <DialogContent style={styles.dialogContentView}>

                <Text style= {styles.dialogText}>
                  Welcome to Junkster. The #1 Rated Junk App in the World.
                  Our mission at Junkster is to eliminate unnecessary junk at
                  landfills by helping real sellers get rid of unwanted items
                  immediately via an interested junk hauler or fixer. Our fees
                  are low but our mission is big. If you have any questions,
                  do not hesitate to contact us at (908) 818-8817 or email us
                  at  junkster@gmail.com.
                </Text>

                <Button
                   style={styles.dialogButton}active success
                  onPress={() => this.setState({ visible: false })}>
                    <Text style= {styles.dialogText}>  Close  </Text>
                </Button>

                </DialogContent>
                </Dialog>
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
  dialogContentView: {
 alignItems: 'center',
 justifyContent: 'center',
 backgroundColor: "#000",
 padding:'2%'
},
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    },
    dialogText: {
      alignSelf: 'center',
      color: 'white',
      padding: '2%'
      },
      dialogButton:
        {
          backgroundColor: "#000",
          marginTop: "auto",
          alignItems: 'center',
          padding: 15,
          marginRight: 10,
          marginBottom: 10,
          alignSelf: 'center',
          borderRadius: 4,
          borderWidth: 0.5,
          borderColor: '#fff'
        },
    submitButton:
      {
        backgroundColor: "#000",
        marginTop: "auto",
        alignItems: 'center',
        padding: 15,
        flex: 1,
        marginRight: 10,
        marginBottom: 10,
        alignSelf: 'center'
      },
  payText:{
    fontSize: 18,
    color: 'white',
    paddingVertical: 5,
    marginTop: 10,
    position: 'absolute',
    bottom: 65,
    alignSelf: 'center'
  },
  h3Text:{
    fontSize: 18,
    color: 'white',
    paddingVertical: 5,
    paddingLeft: '20%',
    paddingTop: '50%'
  },

    buttonContainer: {
      flexDirection: 'row',
      flexGrow: 1,
    }

});

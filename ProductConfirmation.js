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
import { Button, H3, Container, Content, Header, Form, Item, Input, Label, Icon, Picker, Thumbnail} from 'native-base';
import firebase from 'react-native-firebase';

import RNFetchBlob from 'react-native-fetch-blob';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;


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
    productInfo: [],
    productURL: null
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

  addToDatabase(productName,descriptionName,conditionChange,pickupDate,productURL) {
    this.ref.add({
      prodName: productName,
      prodDesc: descriptionName,
      prodCond: conditionChange,
      prodDate: pickupDate,
      prodPhoto: productURL

    });
  }


  // The uploadImage function that you are going to use:
ImageUpload(uri,imageName,mime){
    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        let uploadBlob = null
        const storageRef = firebase.storage().ref("/uploads");
        const imageRef = storageRef.child(imageName + ".jpg")
        fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return imageRef.put(uri, { contentType: mime, name: imageName });
        })
        .then(() => {
          uploadBlob.close()
          console.log(imageRef.getDownloadURL())
          this.setState({productURL: imageRef.getDownloadURL()})
          return imageRef.getDownloadURL()

        })
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }




  render() {





    const productName = this.props.navigation.getParam('productName', 'N/A');
    const descriptionName = this.props.navigation.getParam('descriptionName', 'N/A');
    const conditionChange = this.props.navigation.getParam('conditionChange', 'N/A');
    const pickupDate = this.props.navigation.getParam('pickupDate', 'N/A');
    const productPhoto = this.props.navigation.getParam('productPhoto', 'N/A');

    const {productURL} = this.state;


    return (
      <Container>
        <Content contentContainerStyle={styles.content}>

          <Text style = {styles.h3Text}>Product Name: {productName}</Text>
          <Text style = {styles.h3Text}>Product Description: {descriptionName}</Text>
          <Text style = {styles.h3Text}>Product Condition: {conditionChange}</Text>
          <Text style = {styles.h3Text}>Product Pickup Date: {pickupDate}</Text>
          <Text style = {styles.h3Text}>Product Photo:</Text>

          <Thumbnail
          square large
          source={{uri: productPhoto}}
          style={
            {
              height: 300,
              alignSelf: 'center',
              marginTop: 25,
              width: 300,
            }
            }/>



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
              this.addToDatabase(productName,descriptionName,conditionChange,pickupDate,productURL);
              this.ImageUpload(productPhoto,productName,'images/jpg');
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
    alignSelf: 'center',
    color: 'black'
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

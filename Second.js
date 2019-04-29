/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import React, {Component} from 'react';
import {
  AppRegistry,
  PixelRatio,
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Button, Text, H2, H3, Container, Content, Header, Form, Item, Input, Label, Icon,Thumbnail} from 'native-base';
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
    title: 'Product Details',
    headerStyle:
    {
      backgroundColor: 'f4511e',
    },
    headerTintColor: 'black'
  };

  state = {
    photo:null,
    uri : "https://firebasestorage.googleapis.com/v0/b/junkapp-afd41.appspot.com/o/uploaddefault.png?alt=media&token=3d3c00eb-fd38-4f27-9f1f-a94f462331d3",

    productName: '',
    productPhoto: '',
    descriptionName: '',
    conditionChange: '',
    pickupDate: ''

  };


  handleChoosePhoto = () => {
     const options = {
       noData: true,
     }
     ImagePicker.launchImageLibrary(options, response => {
       if (response.uri) {
         this.setState({ photo: response })
         this.setState({ uri: response.uri })
       }
     })
   }











  onProductNameChange = (productName) => {
    this.setState({ productName: productName });
  }
  onDescriptionChange = (descriptionName) => {
    this.setState({ descriptionName: descriptionName });
  }
  onConditionChange = (conditionChange) => {
    this.setState({ conditionChange: conditionChange });
  }
  onPickupDateChange = (pickupDate) => {
    this.setState({ pickupDate: pickupDate });
  }







  render() {

    const { photo } = this.state;

    return (
        <Container>
          <Content contentContainerStyle={styles.content}>

            <Item regular style={styles.searchBar}>
              <Input
                value={this.state.productName}
                placeholder="Enter The Product's Name"
                onChangeText={this.onProductNameChange}
              />
            </Item>

            <Thumbnail
            square large
            source={{uri: this.state.uri}}
            style={
              {
                height: 90,
                alignSelf: 'center',
                width: 90,
              }
              }/>

            <Button
              style = {styles.UploadImage} bordered success
              onPress={this.handleChoosePhoto} >
              <Text> Choose Photo -- Limit 1 Image</Text>
            </Button>




            <Item regular style={styles.descriptionText}>

              <Input
                value={this.state.descriptionName}
                placeholder='Write An Awesome Description'
                onChangeText={this.onDescriptionChange}
              />

            </Item>


            <Text style = {styles.h3Text}>Condition</Text>


            <Item regular style={styles.descriptionText}>
              <Input
                value={this.state.conditionChange}
                placeholder='Tell Us More About The Condition'
                onChangeText={this.onConditionChange}
              />
            </Item>

            <H3 style = {styles.h3Text}>Pickup Date </H3>

            <DatePicker
              style={{width: 200}}
              date={this.state.pickupDate}
              mode="date"
              placeholder="Select Date"
              format="MM-DD-YYYY"
              minDate="01-01-2019"
              maxDate="12-31-2019"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 9,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36,
                  top: 5,
                  backgroundColor: "#ffffff"
                }
              }}
              onDateChange={(pickupDate) => {this.setState({pickupDate: pickupDate})}}            />



            <View style={styles.buttonContainer}>

            <Button style = {styles.submitButton} block danger
            onPress={() => this.props.navigation.navigate( 'ProductConfirmation',
              {
                productName: this.state.productName,
                descriptionName: this.state.descriptionName,
                conditionChange: this.state.conditionChange,
                pickupDate: this.state.pickupDate,
                productPhoto: photo.uri
              }
            )}>
              <Text style={styles.buttonText}> Next: Customer Info</Text>
            </Button>

            </View>


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
    marginTop: 50,
    marginBottom: 40,
    backgroundColor: "#ffffff",
    width:"100%",
    alignSelf: "center"
  },
  UploadImage:{
    marginTop: 50,
    marginBottom: 40,
    backgroundColor: "#ffffff",
    alignSelf: 'center'
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
  buttonText: {
    alignSelf: 'center',
    color: 'black'
    },
  conditionDropdown: {
    backgroundColor: 'white',
    flex: 1,
    alignSelf: 'center'

  },
  h3Text:{
    fontSize: 18,
    color: 'white'
  },
  dateTest: {
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: 'black'
  }
});

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
import { Button, Text, H2, H3, Container, Content, Header, Form, Item, Input, Label, Icon, Picker, DatePicker, Image} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});





const options = {
  title: 'Choose Option',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

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

    avatarSource: null,


    productName: '',
    descriptionName: '',
    conditionChange: '',
    pickupDate: ''

  };

  constructor(props)
  {
  super(props);

  this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
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

  // Image Upload Function


  selectPhotoTapped()
  {
    const options =
    {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions:
      {
        skipBackup: true,
      },
    };
  }





  onImageUpload = () =>
  {
    ImagePicker.showImagePicker(options, (response) =>
    {
      console.log('Response = ', response);

      if (response.didCancel)
      {
        console.log('User cancelled image picker');
      }
      else if (response.error)
      {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton)
      {
        console.log('User tapped custom button: ', response.customButton);
      }
      else
      {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState
        ({
          avatarSource: source,
        });
      }
    });
  }

  render() {
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




            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                      <View
                        style={[
                          styles.avatar,
                          styles.avatarContainer,
                          { marginBottom: 20 },
                        ]}
                      >
                        {this.state.avatarSource === null ? (
                          <Text>Select a Photo</Text>
                        ) : (
                          <Image style={styles.avatar} source={this.state.avatarSource} />
                        )}
                      </View>
                    </TouchableOpacity>



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
              <Item regular style={styles.descriptionText}>
                <Input
                  value={this.state.pickupDate}
                  placeholder='Format (xx/xx/xxxx)'
                  maxLength = {6}
                  keyboardType = "number-pad"
                  onChangeText={this.onPickupDateChange}
                />
              </Item>







            <Button
            style = {styles.submitButton}
            block success
            onPress=
            {() => this.props.navigation.navigate( 'ProductConfirmation',
              {
                productName: this.state.productName,
                descriptionName: this.state.descriptionName,
                conditionChange: this.state.conditionChange,
                pickupDate: this.state.pickupDate
              }
            )}>
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
    //paddingVertical: 3,
    fontSize: 18,
    color: 'white'
  },
  dateTest: {
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: 'black'
  }
});

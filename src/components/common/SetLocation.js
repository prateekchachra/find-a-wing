import React, { Component } from 'react'
import MapView, { Callout } from 'react-native-maps';
import {View, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
export default class SetLocation extends Component {
    render() {
        return (
            <View style={styles.container}>
            <MapView style={styles.map}
            initialRegion={{
                latitude: 37.773972,
                longitude: -122.431297,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}>
                 <MapView.Marker
            coordinate={{latitude: 37.773972,
            longitude: -122.431297}}
            title={"location"}
            description={"Your Current Location"}
              />
            </MapView>  
            <Callout>
          <View style={styles.calloutView} >
            <GooglePlacesAutocomplete
              placeholder='Enter Destination'
              minLength={3}
              autoFocus={false}
              returnKeyType={'default'}
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              getDefaultValue={() => ''}
              query={{
                key: 'your-key-goes-here',
                language: 'en', // language of the results
              }}
              styles={{
                textInputContainer: {
                  width: '100%'
                },
                textInput: {
                  fontSize: 16,
                },
                predefinedPlacesDescription: {
                  color: 'white'
                },
              }}
              currentLocation={false}
            />
          </View>
</Callout>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
      calloutView: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 10,
        justifyContent: 'flex-start',
        width: "80%",
        marginLeft: "20%",
        marginRight: "50%",
        marginTop: "20%"
    },
  });
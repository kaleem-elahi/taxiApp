import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import MapView , {
  Marker, ProviderPropType, PROVIDER_GOOGLE
} from 'react-native-maps';

const {
  width,
  height
} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class Home extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });s
  }

  componentDidMount() {
    this.props.setName();
  }
  render() {
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <MapView
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    >
      {this.state.markers.map(marker => (
        <Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        />
      ))}
    </MapView>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => this.setState({ markers: [] })}
        style={styles.bubble}
      >
      <Text>Tap to create a marker of random color</Text>
      </TouchableOpacity>
    </View>


      <Text>Hello {this.props.name}</Text>
    </View>
    );
  }
}

Home.propTypes = {
  provider: ProviderPropType,
};


Home.propTypes = {
  name: PropTypes.string
}

Home.defaultProps = {
  name: ""
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'blue'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'red',
  },
});

export default Home;
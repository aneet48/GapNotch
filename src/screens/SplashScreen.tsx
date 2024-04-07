import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {WORK_GIRL_IMAGE} from '../constants/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowHeight);

const SplashScreen = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>
        <View style={{position: 'relative'}}>
          <View style={{flexDirection: 'row', position: 'absolute'}}>
            {Array(Math.floor(windowWidth / 12))
              .fill(0)
              .map((e, i) => (
                <View style={styles.bar} />
              ))}
          </View>
          <View style={{}}>
            {Array(10)
              .fill(0)
              .map((e, i) => (
                <View style={styles.bar2} />
              ))}
          </View>
        </View>
      </View>
      <View style={{flex: 0.1}} />
      <View style={{flex: 0.7, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.imageWrapper}>
          <Image source={WORK_GIRL_IMAGE} style={styles.image} />
        </View>
        <View style={{marginVertical: 20, alignItems: 'center'}}>
          <Text style={styles.logoText}>GapNotch</Text>
          <Text style={{color: 'gray', marginTop: 5, fontSize: 16}}>
            Easily monitor missed daily chores calendar.
          </Text>
        </View>
      </View>
      <View style={{flex: 0.2}}>
        <View
          style={{
            backgroundColor: '#f98d67',
            padding: 20,
            borderRadius: 60,
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Home');
            }}
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 20,
                color: 'white',
              }}>
              GO
            </Text>
            <View style={{marginLeft: 5}}>
              <FontAwesome name="arrow-right" color={'white'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCE9CD',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  imageWrapper: {
    height: 200,
    width: 200,
    borderRadius: 100,
    padding: 30,
    backgroundColor: '#FCE9CD',
    borderColor: 'white',
    borderWidth: 10,
  },
  logoText: {
    fontSize: 46,
    color: 'black',
    fontWeight: 'bold',
  },
  bar: {
    width: 2,
    backgroundColor: '#fad299',
    opacity: 0.5,
    height: windowHeight,
    marginRight: 10,
  },
  bar2: {
    // height: 2,
    // backgroundColor: '#fad299',
    // opacity: 0.2,
    // width: windowWidth,
    // marginBottom: 8,
  },
});

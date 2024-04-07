import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NO_LIST_IMAGE, WORK_GIRL_IMAGE} from '../constants/images';
import NoListImageSvg from '../assets/images/svg/NoList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from '../components/common/Modal';
import NewTask from '../components/common/Modal/NewTask';
import AddButton from '../components/common/AddButton';

const NoItem = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={{flex: 1, backgroundColor: '#FCE9CD'}}>
      <View style={styles.firstContainer}>
        <View
          style={{
            flex: 1,
            transform: [{scaleX: 0.5}],
            paddingHorizontal: 30,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NoListImageSvg />
        </View>
      </View>

      <View style={styles.secondContainer}>
        <View style={{marginTop: 30, flex: 0.5}}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 35,
              color: 'black',
            }}>
            No Tasks Yet
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              //   marginVertical: 10,
              fontStyle: 'italic',
            }}>
            It seems this page is feeling a bit empty. Help fill it up with your
            awesome tasks!
          </Text>
          <Text style={{textAlign: 'center', fontSize: 15, marginVertical: 15}}>
            Tap the '+' button to get started.
          </Text>
        </View>
        <AddButton />
      </View>
      {/* <NewTask modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
    </View>
  );
};

export default NoItem;

const styles = StyleSheet.create({
  firstContainer: {
    flex: 0.5,
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  secondContainer: {
    flex: 0.5,
    alignItems: 'center',
    marginHorizontal: 20,
    // justifyContent: 'center',
  },
});

import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NewTask from './Modal/NewTask';

const AddButton = () => {
      const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={{flex: 0.5}}
        activeOpacity={0.5}
        onPress={() => setModalVisible(true)}>
        <View
          style={{
            backgroundColor: '#f98d67',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: 65,
            height: 65,
            borderRadius: 100,
          }}>
          <FontAwesome name="plus" size={20} color={'white'} />
        </View>
      </TouchableOpacity>
      <NewTask modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

export default AddButton

const styles = StyleSheet.create({})
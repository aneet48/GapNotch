import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ModalWrapper from './index';
import Button from '../Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NewTask = (
  props: React.JSX.IntrinsicAttributes & {
    modalVisible: any;
    setModalVisible: any;
  },
) => {
  return (
    <ModalWrapper {...props}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create New Task</Text>

          <TouchableOpacity
            onPress={() => {
              props.setModalVisible(false);
            }}>
            <FontAwesome name="close" size={20} />
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder="Enter Title" />
        <TextInput
          style={[styles.input, {textAlignVertical: 'top'}]}
          multiline
          numberOfLines={4}
          placeholder="Description(Optional)"
          maxLength={200}
        />
        <Button title={'Create'} />
      </View>
    </ModalWrapper>
  );
};

export default NewTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    // marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: '#f98d67',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});

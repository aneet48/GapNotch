import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalWrapper from '.';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ShowTaskDetails = (
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
        {/* <TextInput style={styles.input} placeholder="Enter Title" />
        <TextInput
          style={[styles.input, {textAlignVertical: 'top'}]}
          multiline
          numberOfLines={4}
          placeholder="Description(Optional)"
          maxLength={200}
        />
        <Button title={'Create'} /> */}
      </View>
    </ModalWrapper>
  );
};

export default ShowTaskDetails

const styles = StyleSheet.create({})
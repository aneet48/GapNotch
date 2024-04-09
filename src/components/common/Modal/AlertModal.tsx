import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ModalWrapper from './index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from '../Button';

const AlertModal = (
  props: React.JSX.IntrinsicAttributes & {
    modalVisible: any;
    setModalVisible: any;
    title: string;
    description: string;
    firstBtn: any;
    secondBtn: any;
  },
) => {
  return (
    <ModalWrapper {...props}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{props.title}</Text>

          <TouchableOpacity
            onPress={() => {
              props.setModalVisible(false);
            }}>
            <FontAwesome name="close" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 16}}>{props.description}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop:20
          }}>
          {props.firstBtn && <Button {...props.firstBtn} />}
          {props.secondBtn && <Button {...props.secondBtn} />}
        </View>
      </View>
    </ModalWrapper>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
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

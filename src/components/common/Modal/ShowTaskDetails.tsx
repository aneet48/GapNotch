import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ModalWrapper from '.';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from '../Button';

const ShowTaskDetails = (
  props: React.JSX.IntrinsicAttributes & {
    modalVisible: any;
    setModalVisible: any;
    title: string;
  },
) => {
  const [descriptionEditable, setdescriptionEditable] = useState(false);
  return (
    <ModalWrapper {...props}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{props.title}</Text>

          <TouchableOpacity
            onPress={() => {
              props.setModalVisible(false);
            }}>
            <FontAwesome name="close" size={16} />
          </TouchableOpacity>
        </View>
        <View>
          <Button
            title="Update"
            viewStyle={{
              alignSelf: 'flex-start',
              backgroundColor: '#f5e5df',
              // borderColor: 'black',
            }}
            transparent
            icon={
              <FontAwesome name="calendar" size={16} style={{marginLeft: 10}} />
            }
          />
          <View style={{marginVertical: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                // justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', marginRight: 10, fontSize: 14}}>
                Total Tracking:
              </Text>
              <Text>6</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', marginRight: 10, fontSize: 14}}>
                Start Date:
              </Text>
              <Text>10-june-2023</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', marginRight: 10, fontSize: 14}}>
                Last Updated:
              </Text>
              <Text>23-nov-2023</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderColor: '#f98d67',
            borderWidth: 1,
            // padding: 5,
            borderRadius: 10,

            // position: 'relative'
          }}>
          {/* {!descriptionEditable && ( */}
          <TouchableOpacity
            onPress={() => setdescriptionEditable(!descriptionEditable)}
            style={{
              position: 'absolute',
              alignSelf: 'flex-end',
              padding: 10,
              zIndex:9999
            }}>
            <FontAwesome
              name={descriptionEditable ? 'close' : 'pencil'}
              size={16}
            />
          </TouchableOpacity>
          {/* )} */}
          <TextInput
            style={[styles.input, {textAlignVertical: 'top'}]}
            multiline
            numberOfLines={4}
            placeholder="Description(Optional)"
            maxLength={200}
            editable={descriptionEditable}
            value="lorem lore lorem"
          />

          {descriptionEditable && (
            <Button
              title="save"
              transparent
              // viewStyle={{width: '60%', alignSelf: 'center'}}
            />
          )}
        </View>
      </View>
    </ModalWrapper>
  );
};

export default ShowTaskDetails;

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    // borderWidth: 1,
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
    // borderColor: '#f98d67',
  },
});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AlertModal from '../components/common/Modal/AlertModal';

const TaskCard = ({title, type}) => {
  const [showMenu, setshowMenu] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  return (
    <View
      style={{
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f98d67',
      }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          setshowMenu(!showMenu);
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#f5b8a2', '#f98d67']}
          style={styles.linearGradient}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            {'this is a description for this card'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.days}>{type} days: 5</Text>
            <Text style={styles.days}>20-02-24 to 20-03-24</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {showMenu && (
        <View
          style={{
            // backgroundColor: 'blue',
            flexDirection: 'row',
            justifyContent: 'space-between',

            paddingVertical: 15,
          }}>
          {/* <TouchableOpacity
            style={{
              alignItems: 'center',
              flex: 1,
              borderEndWidth: 1,
              borderColor: 'lightgray',
            }}>
            <FontAwesome name="eye" size={20} style={{}} />
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              alignItems: 'center',
              flex: 1,
              borderEndWidth: 1,
              borderColor: 'lightgray',
            }}>
            <FontAwesome name="pencil" size={20} style={{}} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setshowDeleteModal(true)}
            style={{
              alignItems: 'center',
              flex: 1,
            }}>
            <FontAwesome name="trash" size={20} style={{}} />
          </TouchableOpacity>
        </View>
      )}
      <AlertModal
        modalVisible={showDeleteModal}
        setModalVisible={setshowDeleteModal}
        title="Delete Task"
        description="Are you sure you want to delete the task?"
        firstBtn={{
          title: 'Cancel',
          viewStyle: styles.btnDeleteModal,
          transparent: true,
          onPress:()=>{setshowDeleteModal(false)}
        }}
        secondBtn={{
          title: 'Create',
          viewStyle: styles.btnDeleteModal,
        }}
      />
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  linearGradient: {
    // marginHorizontal:10,
    padding: 15,
    borderRadius:10
  },
  title: {
    color: 'white',
    // marginBottom: 5,
    fontSize: 26,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    marginBottom: 15,
    fontSize: 18,
    // fontWeight: 'bold',
  },
  days: {
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize',
    // fontWeight: 'bold',
  },
  btnDeleteModal: {flex: 1, marginLeft: 5},
});

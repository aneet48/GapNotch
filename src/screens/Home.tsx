import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import NoItem from './NoItem';
import {Calendar} from 'react-native-calendars';
import TaskCard from './TaskCard';
import AddButton from '../components/common/AddButton';
import Button from '../components/common/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {QUICK_UPDATE_BG} from '../constants/images';
import ShowTaskDetails from '../components/common/Modal/ShowTaskDetails';

const Home = () => {
  // return <NoItem />;
  const [markedDates, setMarkedDates] = useState({});
  const [quickUpdate, setquickUpdate] = useState(false);

  const toggleDate = date => {
    const updatedMarkedDates = {...markedDates};
    if (updatedMarkedDates[date]) {
      delete updatedMarkedDates[date];
    } else {
      updatedMarkedDates[date] = {
        selected: true,
        selectedColor: '#f5b8a2',
      };
    }
    setMarkedDates(updatedMarkedDates);
  };

  return (
    <View style={styles.container}>
      <View style={{height: '90%'}}>
        {quickUpdate ? (
          <View style={styles.calenderContainer}>
            <View style={styles.calendarBackgroundView}></View>
            <View
              style={{
                // borderWidth: 1,
                borderRadius: 15,
                shadowColor: 'black',
                shadowOpacity: 0.26,
                shadowOffset: {width: 0, height: 2},
                shadowRadius: 10,
                elevation: 3,
                backgroundColor: 'white',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setquickUpdate(false);
                }}
                style={{
                  // backgroundColor: 'red',
                  alignSelf: 'flex-end',
                  // position: 'absolute',
                  // top: 30,
                  marginRight: 10,
                  marginTop: 10,
                }}>
                <FontAwesome
                  name="close"
                  style={{paddingHorizontal: 10, fontSize: 18}}
                />
              </TouchableOpacity>
              <Calendar
                markedDates={markedDates}
                onDayPress={day => toggleDate(day.dateString)}
                style={{
                  // backgroundColor: '#f5b8a2',
                  borderRadius: 15,
                  // borderWidth: 1,
                  // borderColor: 'gray',
                  // minHeight: 400,
                  // position: 'absolute',
                }}
                firstDay={1}
                pastScrollRange={1}
                futureScrollRange={1}
                scrollEnabled={false}
                hideArrows={true}
                hideExtraDays={true}
                showScrollIndicator={false}
                theme={{
                  // calendarBackground: '#FFFFFF',
                  textSectionTitleColor: '#f98d67',
                  selectedDayBackgroundColor: '#f5b8a2',
                  selectedDayTextColor: '#FFFFFF',
                  todayTextColor: '#f98d67',
                  dayTextColor: '#2d4150',
                  textDisabledColor: '#d9e1e8',
                  dotColor: '#f98d67',
                  selectedDotColor: '#FFFFFF',
                  arrowColor: '#f98d67',
                  monthTextColor: '#f98d67',
                  indicatorColor: '#f98d67',
                  textDayFontWeight: '300',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: 'bold',
                  textDayFontSize: 14,
                  textMonthFontSize: 25,
                  textDayHeaderFontSize: 14,
                }}
              />
            </View>
          </View>
        ) : (
          <ImageBackground
            source={QUICK_UPDATE_BG}
            // resizeMode="repeat"
            style={[
              styles.calenderContainer,
              {
                // padding: 20,
                // width: '100%',
                backgroundColor: '#f7cebe',
              },
            ]}>
            {/* <View
              style={[
                // styles.calenderContainer,
                {
                  // backgroundColor: '#f7cebe',
                },
              ]}> */}
            <Button
              title="Quick Update"
              viewStyle={{backgroundColor: 'white'}}
              textStyle={{color: '#f98d67'}}
              onPress={() => setquickUpdate(true)}
              icon={
                <FontAwesome
                  name="magic"
                  style={{
                    paddingHorizontal: 10,
                    color: 'black',
                    fontSize: 18,
                  }}
                />
              }
            />
            {/* </View> */}
          </ImageBackground>
        )}
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <FlatList
            data={[
              {title: 'Maid Tracking', type: 'tracked'},
              {title: 'Cook Tracking', type: 'missed'},
              {title: 'Milkman Tracking', type: 'untracked'},
              {title: 'Maid Tracking', type: 'tracked'},
              {title: 'Cook Tracking', type: 'missed'},
              {title: 'Milkman Tracking', type: 'untracked'},
              {title: 'Maid Tracking', type: 'tracked'},
              {title: 'Cook Tracking', type: 'missed'},
              {title: 'Milkman Tracking', type: 'untracked'},
              {title: 'jhjh Tracking', type: 'tracked'},
              {title: 'Cook Tracking', type: 'missed'},
              {title: 'gfg Tracking', type: 'untracked'},
            ]}
            renderItem={({item}) => (
              <TaskCard title={item.title} type={item.type} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View style={{backgroundColor: 'red', justifyContent: 'center'}}>
        <AddButton />
      </View>
      <ShowTaskDetails modalVisible={true} title='Maid Tracking'/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // position: 'relative',
    // top:-300,
  },
  calenderContainer: {
    // position: 'relative',
    padding: 20,
    width: '100%',
    // margin: 15,
    // borderRadius: 15,
    // backgroundColor: '#f5b8a2',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  calendarBackgroundView: {
    // position: 'absolute',
    backgroundColor: '#f7cebe',
    flex: 1,
    height: 250,
    width: Dimensions.get('window').width,
    position: 'absolute',
  },
});

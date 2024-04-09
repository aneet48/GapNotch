import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-vector-icons/Icon';

const Button = (props: {
  title: any;
  onPress?: any;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
  transparent?: boolean;
  icon?: any;
  iconLeft?: boolean;
}) => {
  const {title, onPress, viewStyle, textStyle, transparent, icon, iconLeft} =
    props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[
        styles.container,
        {backgroundColor: transparent ? 'transparent' : '#f98d67'},
        viewStyle,
      ]}>
      {icon && iconLeft ? icon : null}
      <Text
        style={[
          styles.title,
          {
            color: transparent ? '#f98d67' : 'white',
          },
          textStyle,
        ]}>
        {title}
      </Text>
      {icon && !iconLeft ? icon : null}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // marginTop: 20,
    borderWidth: 1,
    borderColor: '#f98d67',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

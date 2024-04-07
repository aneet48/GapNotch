import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

const Button = (props: {
  title: any;
  onPress?: any;
  viewStyle?: ViewStyle;
  transparent?: boolean;
}) => {
  const {title, onPress, viewStyle, textStyle, transparent} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[
        styles.container,
        {backgroundColor: transparent ? 'transparent' : '#f98d67'},
        viewStyle,
      ]}>
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
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#f98d67',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

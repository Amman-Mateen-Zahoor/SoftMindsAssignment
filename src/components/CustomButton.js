import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color, FontFamily, FontSize} from '../constants/style';
import {hp, wp} from '../utils/utils';

const CustomButton = ({title, onPress, style, btnTxt}) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, style]} onPress={onPress}>
      <Text style={[styles.btntext, btnTxt]}>
        {title}
        {'  '}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Color.darkBlue,
    flexDirection: 'row',
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(3),
    marginTop: wp(6),
  },
  btntext: {
    fontSize: FontSize.l,
    color: Color.lightBlue,
  },
});

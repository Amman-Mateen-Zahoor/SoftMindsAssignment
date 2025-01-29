import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {Color, FontFamily, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Popup = ({
  visible,
  handleClose,
  iconSource,
  mainHeading,
  description,
  status,
  btnTitle,

}) => {
  const navigation = useNavigation()
  return (
    <Modal visible={visible} transparent={true} onRequestClose={handleClose}>
      <TouchableWithoutFeedback onPress={()=>{
         handleClose();
         navigation.navigate('Home');
      }}>
        <View style={styles.main}>
          <TouchableWithoutFeedback>
            <View style={styles.contentContainer}>
              <View style={styles.ImageContainer}>
                <Image source={iconSource} style={styles.image}></Image>
              </View>
              <Text style={styles.mainHeading}>{mainHeading}</Text>
              <Text numberOfLines={1} style={styles.description}>
                {description}
              </Text>
              {status && <Text style={styles.status}>{status}</Text>}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <CustomButton
                  title={btnTitle}
                  onPress={()=>{
                    handleClose()
                    navigation.navigate('Home')
                  }}
                  style={{width: wp(70), marginBottom: wp(7)}}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    // height:wp(110),
    width: wp(80),
    backgroundColor: Color.white,
    borderRadius: wp(4),
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: wp(7),
    width: wp(7),
    tintColor: Color.lightBlue,
  },
  ImageContainer: {
    marginTop: wp(5),
    backgroundColor: Color.darkBlue,
    height: wp(15),
    width: wp(15),
    borderRadius: wp(7.5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainHeading: {
    paddingTop: wp(3),
    color: Color.darkBlue,
    fontSize: FontSize.xl,
  },
  description: {
    color: Color.coal,
    fontSize: FontSize.m,
    paddingLeft: wp(10),
    paddingRight: wp(11),
    marginTop: wp(2.5),
    alignSelf: 'center',
  },
  status: {
    color: Color.coal,
    fontSize: FontSize.m,
    paddingLeft: wp(10),
    paddingRight: wp(11),
  },
});

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {wp} from '../utils/utils';
import {Color, FontSize} from '../constants/style';
import {useDispatch} from 'react-redux';
import {delTodo} from '../redux/todoSlice';
import {useNavigation} from '@react-navigation/native';

const TodoCard = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(delTodo({id})); // Dispatch 
  };
  return (
    <View style={styles.container2}>
      <View style={[styles.textmaincontainer]}>
        {/* TextName */}
        <View style={styles.textcontainer}>
          <Text style={styles.toptxtLft}>Name :</Text>
          <Text style={styles.toptxtrgt}>{item.name}</Text>
        </View>
        {/* Textdate*/}
        <View style={styles.textcontainer}>
          <Text style={styles.toptxtLft}>Due Date:</Text>
          <Text style={styles.toptxtrgt}>{item.selectedDate}</Text>
        </View>
        {/* textTime */}
        <View style={[styles.textcontainer]}>
          <Text style={styles.toptxtLft}>Due Time:</Text>
          <Text style={styles.toptxtrgt}>{item.selectedTime}</Text>
        </View>
        {/* see Descripton */}
        <Pressable
          onPress={() => navigation.navigate('Description',item.description)}
          hitSlop={{left: wp(10), right: wp(10)}}
          style={[styles.textcontainer]}>
          <Text style={[styles.toptxtLft, , {color: Color.darkBlue}]}>
            See Description
          </Text>
        </Pressable>
      </View>
      {/* btns */}
      <View style={{justifyContent: 'space-between'}}>
        <Pressable
          onPress={() => navigation.navigate('AddList', item)}
          style={styles.containerbtn}>
          <Text style={styles.containerbtntxt}>edit</Text>
        </Pressable>
        <Pressable
          style={styles.containerbtn}
          onPress={() => handleDelete(item.id)}>
          <Text style={styles.containerbtntxt}>delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container2: {
    backgroundColor: Color.adjustableLightBlue(0.1),
    flexDirection: 'row',
    // height: wp(20),
    alignItems: 'center',
    padding: wp(3),
    borderRadius: wp(2),
    marginBottom: wp(4),
  },
  toptxtLft: {
    color: Color.text,
    fontSize: FontSize.m,
  },
  toptxtrgt: {
    color: Color.black,
    fontSize: FontSize.m,
    marginLeft: wp(1),
  },
  container2icon: {
    backgroundColor: Color.adjustableLightBlue(0.2),
    height: wp(8),
    width: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(1),
    margin: wp(1),
  },
  iconimg: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
  },
  textmaincontainer: {
    flex: 1,
    marginLeft: wp(2),
  },
  textcontainer: {flexDirection: 'row'},
  containerbtn: {
    borderWidth: 1,
    borderColor: Color.darkBlue,
    padding: wp(1),
    borderRadius: wp(2),
    marginLeft: wp(7),
    paddingHorizontal: wp(2),
    marginTop: wp(1),
  },
  containerbtntxt: {
    color: Color.darkBlue,
    alignSelf: 'center',
    fontSize: FontSize.m,
  },
});

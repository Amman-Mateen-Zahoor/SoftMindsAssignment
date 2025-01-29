import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CommonLayout from '../layout/CommonLayout';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import Popup from '../model/PopUp';
import {wp} from '../utils/utils';
import {useDispatch} from 'react-redux';
import {addTodo, updateTodo} from '../redux/todoSlice';

// Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required('Name is required'), // Name cannot be empty
  description: Yup.string().trim().required('Description is required'), // Description cannot be empty
  selectedDate: Yup.string().required('Date is required'), // Date is required
  selectedTime: Yup.string().required('Time is required'), // Time is required
});

const AddList = ({route}) => {
  const taskData = route?.params || {}; // Safely access route params or use an empty object
  const [isPopupVisible, setPopupVisible] = useState(false);
  const dispatch = useDispatch();

  const handleSave = values => {
    const action = taskData.id
      ? updateTodo({id: taskData.id, ...values}) // Update task if ID exists
      : addTodo(values); // Add new task if no ID
    dispatch(action);
    setPopupVisible(true);
  };

  return (
    <CommonLayout heading={taskData.id ? 'Update Task' : 'Add New Task'}>
      <Formik
        initialValues={{
          name: taskData.name || '',
          description: taskData.description || '',
          selectedDate: taskData.selectedDate || '',
          selectedTime: taskData.selectedTime || '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSave}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <>
            {/* Name Input */}
            <CustomTextInput
              simpleTextInput
              placeholder="Enter Name"
              value={values.name}
              onChangeText={handleChange('name')}
              style={styles.input}
              errorMessage={touched.name && errors.name}
            />

            {/* Date Input */}
            <CustomTextInput
              customDate
              value={values.selectedDate}
              onSelectValue={value => setFieldValue('selectedDate', value)}
              style={styles.input}
              errorMessage={touched.selectedDate && errors.selectedDate}
            />

            {/* Time Input */}
            <CustomTextInput
              customTime
              value={values.selectedTime}
              onSelectValue={value => setFieldValue('selectedTime', value)}
              style={styles.input}
              errorMessage={touched.selectedTime && errors.selectedTime}
            />

            {/* Description Input */}
            <CustomTextInput
              simpleTextInput
              placeholder="Enter Description"
              value={values.description}
              onChangeText={handleChange('description')}
              style={styles.input}
              errorMessage={touched.description && errors.description}
            />

            {/* Save Button */}
            <CustomButton
              title={taskData.id ? 'Update Task' : 'Create Task'}
              style={styles.button}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>

      {/* Popup */}
      <Popup
        visible={isPopupVisible}
        handleClose={() => setPopupVisible(false)}
        iconSource={require('../assets/icons/check.png')}
        mainHeading={
          taskData.id ? 'Updated Successfully' : 'Added Successfully'
        }
        description={
          taskData.id
            ? 'Your task has been updated'
            : 'Your task has been added'
        }
        status="successfully"
        btnTitle="Done"
      />
    </CommonLayout>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: wp(4),
  },
  button: {
    marginBottom: wp(5),
  },
});

export default AddList;

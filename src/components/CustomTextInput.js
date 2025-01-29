// import React, { useState } from 'react';
// import {
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import DatePicker from 'react-native-date-picker';
// import { wp } from '../utils/utils';
// import { Color, FontFamily, FontSize } from '../constants/style';

// const CustomTextInput = ({
//   customDate,
//   customTime,
//   simpleTextInput,
//   placeholder,
//   value,
//   onChangeText,
//   onSelectValue, // Callback to pass the selected value to the parent
//   errorMessage, // New prop for error message
//   style,
// }) => {
//   const [isFocus, setIsFocus] = useState(false);
//   const [date, setDate] = useState(new Date());
//   const [open, setOpen] = useState(false);

//   // Get today's date for setting the minimum date
//   const today = new Date();

//   return (
//     <View style={styles.wrapper}>
//       {/* Simple Text Input */}
//       {simpleTextInput && (
//         <Pressable>
//           <View
//             style={[
//               styles.containerSimpleInput,
//               isFocus && { borderColor: Color.primary }, // Highlight on focus
//             ]}
//           >
//             <TextInput
//               style={[styles.textInput, style]}
//               placeholder={placeholder}
//               placeholderTextColor={Color.inputText}
//               value={value}
//               onChangeText={onChangeText}
//               multiline
//               onFocus={() => setIsFocus(true)}
//               onBlur={() => setIsFocus(false)}
//             />
//           </View>
//         </Pressable>
//       )}

//       {/* Date/Time Picker */}
//       {(customDate || customTime) && (
//         <Pressable
//           hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
//           onPress={() => setOpen(true)}
//           style={[
//             styles.containerSimpleInput,
//             isFocus && { borderColor: Color.primary }, // Highlight on focus
//           ]}
//         >
//           <Text style={[styles.textInput, style]}>
//             {customTime
//               ? new Intl.DateTimeFormat('en-US', {
//                   hour: 'numeric',
//                   minute: 'numeric',
//                   hour12: true,
//                 }).format(date)
//               : date.toLocaleDateString('en-US', {
//                   month: 'short',
//                   day: 'numeric',
//                   year: 'numeric',
//                 })}
//           </Text>

//           <Image
//             source={
//               customDate
//                 ? require('../assets/icons/calendar.png')
//                 : require('../assets/icons/clock.png')
//             }
//             style={styles.icon}
//           />

//           <DatePicker
//             mode={customDate ? 'date' : 'time'}
//             modal
//             open={open}
//             date={date}
//             minimumDate={customDate ? today : null} // Set minimum date to today if customDate is true
//             onConfirm={(selectedDate) => {
//               setOpen(false);
//               setDate(selectedDate);

//               // Call the callback to pass the value to the parent
//               if (onSelectValue) {
//                 const formattedValue = customTime
//                   ? new Intl.DateTimeFormat('en-US', {
//                       hour: 'numeric',
//                       minute: 'numeric',
//                       hour12: true,
//                     }).format(selectedDate)
//                   : selectedDate.toLocaleDateString('en-US', {
//                       month: 'short',
//                       day: 'numeric',
//                       year: 'numeric',
//                     });
//                 onSelectValue(formattedValue);
//               }
//             }}
//             onCancel={() => {
//               setOpen(false);
//             }}
//           />
//         </Pressable>
//       )}

//       {/* Error Message */}
//       {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
//     </View>
//   );
// };

// export default CustomTextInput;

// const styles = StyleSheet.create({
//   wrapper: {
//     marginBottom: wp(4), // Space between inputs
//   },
//   containerSimpleInput: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: Color.inputField,
//     marginTop: wp(2),
//     paddingBottom: wp(2),
//   },
//   icon: {
//     width: wp(4),
//     height: wp(4),
//     resizeMode: 'contain',
//   },
//   textInput: {
//     flex: 1,
//     fontSize: FontSize.l,
//     color: Color.coal,
//     padding: 0,
//   },
//   errorText: {
//     color: Color.coal,
//     fontSize: FontSize.m,
//     marginTop: wp(1),
//   },
// });
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {wp} from '../utils/utils';
import {Color, FontFamily, FontSize} from '../constants/style';

const CustomTextInput = ({
  customDate,
  customTime,
  simpleTextInput,
  placeholder,
  value,
  onChangeText,
  onSelectValue, // Callback to pass the selected value to the parent
  errorMessage, // New prop for error message
  style,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false); // State to track confirmation

  // Get today's date for setting the minimum date
  const today = new Date();

  return (
    <View style={styles.wrapper}>
      {/* Simple Text Input */}
      {simpleTextInput && (
        <Pressable>
          <View
            style={[
              styles.containerSimpleInput,
              isFocus && {borderColor: Color.primary}, // Highlight on focus
            ]}>
            <TextInput
              style={[styles.textInput, style]}
              placeholder={placeholder}
              placeholderTextColor={Color.inputText}
              value={value}
              onChangeText={onChangeText}
              multiline
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          </View>
        </Pressable>
      )}

      {/* Date/Time Picker */}
      {(customDate || customTime) && (
        <Pressable
          hitSlop={{bottom: 5, left: 5, right: 5, top: 5}}
          onPress={() => setOpen(true)}
          style={[
            styles.containerSimpleInput,
            isFocus && {borderColor: Color.primary}, // Highlight on focus
          ]}>
          <Text
            style={[
              styles.textInput,
              style,
              {color: isConfirmed ? Color.coal : Color.inputText}, // Conditional color
            ]}>
            {customTime
              ? new Intl.DateTimeFormat('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                }).format(date)
              : date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
          </Text>

          <Image
            source={
              customDate
                ? require('../assets/icons/calendar.png')
                : require('../assets/icons/clock.png')
            }
            style={styles.icon}
          />

          <DatePicker
            mode={customDate ? 'date' : 'time'}
            modal
            open={open}
            date={date}
            minimumDate={customDate ? today : null} // Set minimum date to today if customDate is true
            onConfirm={selectedDate => {
              setOpen(false);
              setDate(selectedDate);
              setIsConfirmed(true); // Set confirmed state to true

              // Call the callback to pass the value to the parent
              if (onSelectValue) {
                const formattedValue = customTime
                  ? new Intl.DateTimeFormat('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    }).format(selectedDate)
                  : selectedDate.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    });
                onSelectValue(formattedValue);
              }
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </Pressable>
      )}

      {/* Error Message */}
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: wp(4), // Space between inputs
  },
  containerSimpleInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.inputField,
    marginTop: wp(2),
    paddingBottom: wp(2),
  },
  icon: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    fontSize: FontSize.l,
    color: Color.coal,
    padding: 0,
  },
  errorText: {
    color: Color.coal,
    fontSize: FontSize.m,
    marginTop: wp(1),
  },
});

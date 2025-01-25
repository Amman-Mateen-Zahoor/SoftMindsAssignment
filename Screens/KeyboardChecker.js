// // import React, { useRef } from 'react';
// // import { KeyboardAvoidingView, TextInput, StyleSheet, Platform } from 'react-native';

// // const KeyboardChecker = () => {
// //   const input1Ref = useRef(null);
// //   const input2Ref = useRef(null);

// //   return (
// //     <KeyboardAvoidingView
// //       style={styles.container}
// //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //     >
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Enter First Name"
// //         returnKeyType="next"
// //         onSubmitEditing={() => input2Ref.current?.focus()} // Moves focus to the next TextInput
// //         blurOnSubmit={false} // Prevents closing the keyboard when navigating
// //       />
// //       <TextInput
// //         ref={input2Ref}
// //         style={styles.input}
// //         placeholder="Enter Last Name"
// //         returnKeyType="done"
// //         onSubmitEditing={() => {
// //           console.log('Done button pressed');
// //         }}
// //       />
// //     </KeyboardAvoidingView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     padding: 16,
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: 'gray',
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     paddingHorizontal: 8,
// //     marginBottom: 12,
// //   },
// // });

// // export default KeyboardChecker;

// import React, { useRef } from 'react';
// import { KeyboardAvoidingView, TextInput, StyleSheet, Platform, Alert } from 'react-native';

// const KeyboardChecker = () => {
//   const input2Ref = useRef(null);

//   const handleKeyPress = ({ nativeEvent }, ref) => {
//     if (nativeEvent.key === 'Enter') {
//       if (ref) ref.current?.focus(); // Navigate to the next input
//       else Alert.alert('Done pressed', 'Submitting form or custom logic');
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <TextInput
//         style={styles.input}
//         placeholder="Enter First Name"
//         returnKeyType="next"
//         blurOnSubmit={false} // Prevents keyboard from closing
//         onKeyPress={(event) => handleKeyPress(event, input2Ref)} // Custom key handling
//       />
//       <TextInput
//         ref={input2Ref}
//         style={[styles.input, { height: 100 }]}
//         placeholder="Enter Description"
//         multiline={true} // Allows multiline input
//         returnKeyType="done" // Changes button label to Done
//         onKeyPress={(event) => handleKeyPress(event, null)} // Done logic
//       />
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 8,
//     marginBottom: 12,
//   },
// });

// export default KeyboardChecker;

import React, { useRef } from "react";
import { KeyboardAvoidingView, TextInput, StyleSheet, Platform, Alert } from "react-native";

const KeyboardChecker = () => {
  const inputRef = useRef(null);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        ref={inputRef}
        style={[styles.input, { height: 100 }]}
        placeholder="Type something..."
        multiline={true}
        returnKeyType="done" // Adds "Done" or "OK" on the keyboard
        blurOnSubmit={true} // Hides the keyboard when "OK" is pressed
        onSubmitEditing={() => Alert.alert("OK Pressed", "You pressed OK!")}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
});

export default KeyboardChecker;

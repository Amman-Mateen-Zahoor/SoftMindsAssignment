// import { FlatList, StyleSheet, View} from 'react-native';
// import React, {useState, useEffect} from 'react';
// import CommonLayout from '../layout/CommonLayout';
// import {Dropdown} from 'react-native-element-dropdown';
// import {Color} from '../constants/style';
// import {wp} from '../utils/utils';
// import TodoCard from '../components/TodoCard';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchTodos} from '../redux/todoSlice';
// import {parseDateString, parseTimeString} from '../constants/data';

// const Home = () => {
//   const dispatch = useDispatch();
//   const [value, setValue] = useState(null);
//   const [sortedTasks, setSortedTasks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const tasks = useSelector(state => state.todo.arr);
//   const apidata = useSelector(state => state.todo.data);
//   // console.log('Hi i am Api Data', tasks);

//   useEffect(() => {
//     if (!apidata) {
//       dispatch(fetchTodos());
//     } else {
//       console.warn('Hi, I am Api Data', apidata);
//     }
//   }, [apidata, dispatch]);

//   const data = [
//     {label: 'By Date', value: 'bydate'},
//     {label: 'By Name', value: 'byname'},
//     {label: 'By Time', value: 'bytime'},
//   ];

//   useEffect(() => {
//     let filteredTasks = tasks;
//     if (searchQuery) {
//       filteredTasks = tasks.filter(task => {
//         const nameMatch = task.name
//           .toLowerCase()
//           .includes(searchQuery.toLowerCase());
//         const dateMatch = task.selectedDate.includes(searchQuery);
//         const timeMatch = task.selectedTime.includes(searchQuery);

//         // If search query is a single character, prioritize exact matches
//         if (searchQuery.length === 1) {
//           return (
//             task.name.toLowerCase() === searchQuery.toLowerCase() ||
//             dateMatch ||
//             timeMatch
//           );
//         }

//         return nameMatch || dateMatch || timeMatch;
//       });
//     }

//     if (value === 'byname') {
//       const sorted = [...filteredTasks].sort((a, b) =>
//         a.name.localeCompare(b.name),
//       );
//       setSortedTasks(sorted);
//     } else if (value === 'bydate') {
//       const sorted = [...filteredTasks].sort((a, b) => {
//         const dateA = parseDateString(a.selectedDate);
//         const dateB = parseDateString(b.selectedDate);
//         return dateA - dateB;
//       });
//       setSortedTasks(sorted);
//     } else if (value === 'bytime') {
//       const sorted = [...filteredTasks].sort((a, b) => {
//         const timeA = parseTimeString(a.selectedTime);
//         const timeB = parseTimeString(b.selectedTime);
//         return timeA - timeB;
//       });
//       setSortedTasks(sorted);
//     } else {
//       setSortedTasks(filteredTasks);
//     }
//   }, [value, tasks, searchQuery]);

//   return (
//     <CommonLayout
//       heading={'All Tasks'}
//       search
//       setSearchQuery={setSearchQuery}
//       disablScrollView>
//       <View style={{flex: 1}}>
//         <View style={styles.container}>
//           <Dropdown
//             style={styles.dropdown}
//             data={data}
//             labelField="label"
//             valueField="value"
//             placeholder="Filter"
//             placeholderStyle={{color: Color.darkBlue}}
//             selectedTextStyle={{color: Color.inputText}}
//             itemTextStyle={{color: Color.coal}}
//             activeColor={Color.lightBlue}
//             value={value}
//             onChange={item => {
//               setValue(item.value);
//               console.log('Selected:', item.value);
//             }}
//           />
//         </View>
//         <FlatList
//           data={sortedTasks}
//           contentContainerStyle={styles.content}
//           renderItem={({item}) => <TodoCard item={item} />}
//         />
//       </View>
//     </CommonLayout>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'flex-end',
//     backgroundColor: Color.white,
//     marginVertical: wp(3),
//     marginRight: wp(3),
//   },
//   dropdown: {
//     width: wp(30),
//     height: wp(10),
//     borderColor: Color.inputField,
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: wp(3),
//   },
//   content: {
//     paddingHorizontal: wp(5),
//     paddingBottom: wp(10),
//   },
// });

import { FlatList, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CommonLayout from '../layout/CommonLayout';
import {Dropdown} from 'react-native-element-dropdown';
import {Color} from '../constants/style';
import {wp} from '../utils/utils';
import TodoCard from '../components/TodoCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodos} from '../redux/todoSlice';
import {parseDateString, parseTimeString} from '../constants/data';

const Home = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('latest'); // Default to 'latest'
  const [sortedTasks, setSortedTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const tasks = useSelector(state => state.todo.arr);
  const apidata = useSelector(state => state.todo.data);
  // console.log('Hi i am Api Data', tasks);

  useEffect(() => {
    if (!apidata) {
      dispatch(fetchTodos());
    } else {
      console.warn('Hi, I am Api Data', apidata);
    }
  }, [apidata, dispatch]);

  const data = [
    {label: 'Latest', value: 'latest'}, // New default sorting option
    {label: 'By Date', value: 'bydate'},
    {label: 'By Name', value: 'byname'},
    {label: 'By Time', value: 'bytime'},
  ];

  useEffect(() => {
    let filteredTasks = tasks;
    if (searchQuery) {
      filteredTasks = tasks.filter(task => {
        const nameMatch = task.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const dateMatch = task.selectedDate.includes(searchQuery);
        const timeMatch = task.selectedTime.includes(searchQuery);

        // If search query is a single character, prioritize exact matches
        if (searchQuery.length === 1) {
          return (
            task.name.toLowerCase() === searchQuery.toLowerCase() ||
            dateMatch ||
            timeMatch
          );
        }

        return nameMatch || dateMatch || timeMatch;
      });
    }

    if (value === 'byname') {
      const sorted = [...filteredTasks].sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      setSortedTasks(sorted);
    } else if (value === 'bydate') {
      const sorted = [...filteredTasks].sort((a, b) => {
        const dateA = parseDateString(a.selectedDate);
        const dateB = parseDateString(b.selectedDate);
        return dateA - dateB;
      });
      setSortedTasks(sorted);
    } else if (value === 'bytime') {
      const sorted = [...filteredTasks].sort((a, b) => {
        const timeA = parseTimeString(a.selectedTime);
        const timeB = parseTimeString(b.selectedTime);
        return timeA - timeB;
      });
      setSortedTasks(sorted);
    } else if (value === 'latest') {
      const sorted = [...filteredTasks].sort((a, b) => b.id - a.id); // Sort by id in descending order
      setSortedTasks(sorted);
    } else {
      setSortedTasks(filteredTasks);
    }
  }, [value, tasks, searchQuery]);

  return (
    <CommonLayout
      heading={'All Tasks'}
      search
      setSearchQuery={setSearchQuery}
      disablScrollView>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Dropdown
            style={styles.dropdown}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Filter"
            placeholderStyle={{color: Color.darkBlue}}
            selectedTextStyle={{color: Color.inputText}}
            itemTextStyle={{color: Color.coal}}
            activeColor={Color.lightBlue}
            value={value}
            onChange={item => {
              setValue(item.value);
              console.log('Selected:', item.value);
            }}
          />
        </View>
        <FlatList
          data={sortedTasks}
          contentContainerStyle={styles.content}
          renderItem={({item}) => <TodoCard item={item} />}
        />
      </View>
    </CommonLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    backgroundColor: Color.white,
    marginVertical: wp(3),
    marginRight: wp(3),
  },
  dropdown: {
    width: wp(30),
    height: wp(10),
    borderColor: Color.inputField,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: wp(3),
  },
  content: {
    paddingHorizontal: wp(5),
    paddingBottom: wp(10),
  },
});
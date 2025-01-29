import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching todos
//Note We USe eNd Point Logic here
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Fetch error:', error);
      return rejectWithValue(error.response?.data || 'Failed to fetch todos');
    }
  },
);

const initialState = {
  arr: [],
  isLoading: false,
  data: null,
  isError: false,
  errorMessage: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log('Adding Task:', action.payload);
      state.arr.push({...action.payload, id: state.arr.length + 1}); // Assign unique ID
    },
    delTodo: (state, action) => {
      state.arr = state.arr.filter(task => task.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const {id, name, description, selectedDate, selectedTime} =
        action.payload;
      const task = state.arr.find(task => task.id === id);
      if (task) {
        Object.assign(task, {name, description, selectedDate, selectedTime});
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = '';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log('Fetched Data:', action.payload);
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload || 'Error fetching data';
        console.error('Error:', action.payload);
      });
  },
});

// Export actions
export const {addTodo, delTodo, updateTodo} = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;

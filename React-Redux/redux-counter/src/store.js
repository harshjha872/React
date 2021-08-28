import { createStore } from 'redux';

//redux-toolkit

import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseby10(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const CounterActions = counterSlice.actions;
export default store;
// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === 'in')
//     return {
//       counter: state.counter + 1,
//     };

//   if (action.type === 'dec')
//     return {
//       counter: state.counter - 1,
//     };

//   return {
//     counter: state.counter,
//   };
// };
// const store = createStore(counterReducer);

// export default store;

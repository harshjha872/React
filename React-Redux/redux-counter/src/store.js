// import { createStore } from 'redux';

//redux-toolkit

import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

const dummySlice = createSlice({
  name: 'secondSlice',
  initialState: {
    value: 1,
  },
  reducers: {
    increaseValue(state) {
      state.value++;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    dummy: dummySlice.reducer,
  },
});

export const CounterActions = counterSlice.actions;
export const DummyActions = dummySlice.actions;
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

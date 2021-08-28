// import { createStore } from 'redux';

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
  //for multiple slices we should do like reducer: { counter: counterSlice.reduce , anotherSliceName: SliceName.reducer}
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

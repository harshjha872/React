import { createSlice } from '@reduxjs/toolkit';

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

//http reqs- action creater

export const sendReq = () => {
  return async (arg) => {
    //fetch req
    // fetch('')
    console.log('hello', arg);
  };
};

export default counterSlice;

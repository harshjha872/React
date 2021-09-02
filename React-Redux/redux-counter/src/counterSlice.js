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

//http reqs - action creater

export const sendReq = () => {
  return (dispatch) => {
    //this dispatch is given by redux in as argument
    //fetch req
    // fetch('')
    console.log('hello');
    // dispatch(counterSlice.actions.increment())
    //u can also dispatch actions here
    //dispatch(increment())
  };
};

export default counterSlice;

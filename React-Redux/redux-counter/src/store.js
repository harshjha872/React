import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'in')
    return {
      counter: state.counter + 1,
    };

  if (action.type === 'dec')
    return {
      counter: state.counter - 1,
    };

  return {
    counter: state.counter,
  };
};
const store = createStore(counterReducer);

//react-toolkit

export default store;

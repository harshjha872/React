const redux = require('redux');

const ReducerFunction = (state = { counter: 0 }, action) => {
  return {
    couter: state.counter + 1,
  };
};
const store = redux.createStore(ReducerFunction);

// console.log(store.);

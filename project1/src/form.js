import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Error from './Error';

const Form = (props) => {
  const [UserAge, setUserAge] = useState('');
  const [UserName, setUserName] = useState('');
  const [error, setError] = useState('');
  const onChangeNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const onChangeAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (UserName === '' && UserAge === '') return setError('Error');
    if (UserAge < 0) return setError('Negative Error');
    props.valueFunction({
      UserName: UserName,
      UserAge: Number(UserAge),
    });

    setUserAge('');
    setUserName('');
  };

  const closeError = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && <Error closeError={closeError} />}
      <form onSubmit={onSubmitHandler}>
        <label>Enter The Name</label>
        <input type='text' onChange={onChangeNameHandler} value={UserName} />
        <label>Enter The age</label>
        <input type='number' onChange={onChangeAgeHandler} value={UserAge} />
        <button>Add User</button>
      </form>
    </React.Fragment>
  );
};

export default Form;

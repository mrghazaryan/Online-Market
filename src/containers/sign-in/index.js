import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import InputField from '../../components/shared/input-field';
import {getUsers} from '../../core/controllers/signIn';

const SignIn = () => {

  const history = useHistory();
  const [username, changeUsername] = useState('');
  const [password, changePassword] = useState('');

  const checkUser = (users) => {
    const user = users.find(user => (user.username.toLowerCase() === username.toLowerCase() && user.password === password));

    if (user) {
      history.push('/shop');
    } else {
      alert('Invalid username password');
      changeUsername('');
      changePassword('');
    }
  }

  const onSignIn = () => {
    getUsers(checkUser);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <InputField
        title={'Username:'}
        value={username}
        onChangeHandler={changeUsername}
      />
      <InputField
        title={'Password:'}
        type={'password'}
        value={password}
        onChangeHandler={changePassword}
      />
      <button onClick={onSignIn}>
        Sign In
      </button>
      <Link to={'/sign-up'}>
        <button>Sign Up</button>
      </Link>
    </div>
  )
};

export default SignIn;
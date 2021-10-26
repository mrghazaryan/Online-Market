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
        <div className={'sign-in'}>
            <h1 className='sign-inh1'>Welcome to the market of need<br/>
                Here you can find anything that you've searched for</h1>
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
            <button className="sign-inBt" onClick={onSignIn}>
                Sign In
            </button>
            <Link to={'/sign-up'}>
                <button className='sign-in-upBt'>
                    Create New Account
                </button>
            </Link>
        </div>
    )
};

export default SignIn;
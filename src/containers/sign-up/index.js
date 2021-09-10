import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {GENDERS} from '../../helpers/constants';
import ValidationDate from '../../components/shared/validation-date';
import ValidationInput from '../../components/shared/validation-input';
import {createUser} from '../../core/controllers/signUp';

const SignUp = () => {
  const history = useHistory();
  const [email, changeEmail] = useState('');
  const [fullName, changeFullName] = useState('');
  const [phone, changePhone] = useState('');
  const [password, changePassword] = useState('');
  const [confirmPassword, changeConfirmPassword] = useState('');
  const [day, changeDay] = useState(1);
  const [month, changeMonth] = useState(0);
  const [year, changeYear] = useState(2021);
  const [gender, changeGender] = useState(1);
  const [validations, setValidations] = useState({});

  const isValidEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const isValidFullName = () => {
    const re = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
    return re.test(fullName);
  };
  const isValidPhone = () => {
    const re = /^\+?[0-9]{11}$/;
    return re.test(phone);
  };
  const isValidPassword = () => {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(password);
  };

  const isValidDate = () => {
    const ageDifMs = Date.now() - new Date(year, month, day).getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age > 10;
  };

  const registerNewUser = () => {
    const user = {
      email,
      fullName,
      phone,
      password,
      birthDate: new Date(year, month, day),
      gender
    };

    createUser(user);
    history.push('/shop');
  };

  const signUp = () => {
    const newValidations = {};

    if (!isValidEmail()) {
      newValidations.email = 'Invalid Email';
    }
    if (!isValidFullName()) {
      newValidations.fullName = 'Invalid name';
    }
    if (!isValidPassword()) {
      newValidations.password = 'Invalid Password';
    }
    if (!isValidPhone()) {
      newValidations.phone = 'Invalid Phone number';
    }
    if (!isValidDate()) {
      newValidations.date = 'Invalid date';
    }
    if (password !== confirmPassword) {
      newValidations.confirmPassword = 'Passwords does not match';
    }

    if (Object.keys(newValidations).length === 0) {
      registerNewUser();
    }

    setValidations(newValidations);
  };

  return (
    <div className={'sign-up'}>
      <h1>Sign Up</h1>

      <ValidationInput
        title={'Email:'}
        value={email}
        onChangeHandler={changeEmail}
        validationMsg={validations.email}
      />

      <ValidationInput
        title={'Full Name:'}
        value={fullName}
        onChangeHandler={changeFullName}
        validationMsg={validations.fullName}
      />

      <ValidationInput
        title={'Phone:'}
        value={phone}
        onChangeHandler={changePhone}
        validationMsg={validations.phone}
      />

      <ValidationInput
        title={'Password'}
        type={'password'}
        value={password}
        onChangeHandler={changePassword}
        validationMsg={validations.password}
      />

      <ValidationInput
        title={'Confirm Password'}
        type={'password'}
        value={confirmPassword}
        onChangeHandler={changeConfirmPassword}
        validationMsg={validations.confirmPassword}
      />

      <ValidationDate
        dateTitle={'Birth day:'}
        day={day}
        month={month}
        year={year}
        changeDayHandler={changeDay}
        changeMonthHandler={changeMonth}
        changeYearHandler={changeYear}
        validationMsg={validations.date}
      />

      {GENDERS.map(currentGender => (
        <label key={currentGender.id}>
          <input
            type='radio'
            value={currentGender.id}
            checked={gender === currentGender.id}
            onChange={() => changeGender(currentGender.id)}
          />
          {currentGender.label}
        </label>
      ))}
      <br/>

      <button onClick={signUp}>Sign Up</button>
      <Link to={'/sign-in'}>
        <button>Sign In</button>
      </Link>
    </div>
  );
};

export default SignUp;
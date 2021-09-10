import React from 'react';
import SignIn from "../../containers/sign-in";
import SignUp from "../../containers/sign-up";
import Shop from "../../containers/shop";
import Bag from "../../containers/bag";

export const ROUTES = [
  {
    id: 1,
    name: 'SignIn',
    path: '/sign-in',
    component: <SignIn/>,
    isAuth: true
  },
  {
    id: 2,
    name: 'SignUp',
    path: '/sign-up',
    component: <SignUp/>,
    isAuth: true
  },
  {
    id: 3,
    name: 'Shop',
    path: '/shop',
    component: <Shop/>,
    isAuth: false
  },
  {
    id: 4,
    name: 'Bag',
    path: '/bag',
    component: <Bag/>,
    isAuth: false
  }
];

export const DAYS = [];
for (let i = 1; i <= 31; i++) {
  DAYS.push(i);
}

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const YEARS = [];
for (let i = 1920; i <= 2021; i++) {
  YEARS.push(i);
}

export const GENDERS = [
  {id: 1, label: 'Male'},
  {id: 2, label: 'Female'},
  {id: 3, label: 'Other'}
];
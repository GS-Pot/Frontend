import React from 'react';
import HomePage from '../Pages/Home.page';

import LoginPage from '../Pages/Login.page';
import SignupPage from '../Pages/Signup.page';

export const PRIVATE_ROUTES = [

]
export const PUBLIC_ROUTES = [
    {
        path: "/",
        component: <HomePage />
    },
    {
        path: "/login",
        component: <LoginPage />
    },
    {
        path: "/signup",
        component: <SignupPage />
    },

]
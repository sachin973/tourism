/* Route declarations for the app */

import * as reviews from '../views'
import Home from '../views/Home';
import HomeLayout from '../Layout/HomeLayout/homeLayout';
const routData = [
    {
        id:"0",
        path: '/',
        component: Home,
        // guard: true,
        exact: true,
        layout :HomeLayout
    },
    {
        id:"1",
        path: '/login',
        component: reviews.Login,
        exact: true,
    },
    {
        id:"2",
        path: '/register',
        component: reviews.Register,
        exact: true,
    }
];

export default routData;

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from './Login';
import Browse from './Browse';
const Body = () =>
{
    const AppRouter = createBrowserRouter([
        {
            path: '/', element: <Login></Login>
        }, {
            path: '/browse',
            element: <Browse />,
        }, {}
    ]);
    return (
        <RouterProvider router={AppRouter} />
    );
};

export default Body;
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import HomeLayout from './layouts/HomeLayout';
import NotFound from './components/no-found';
import AuthLayout from './layouts/AuthLayout';
import SignIn from './pages/auth/SignIn';
import Register from './pages/auth/Register';
import EditProfile from './pages/auth/Edit-Profile';
import ComingSoon from './components/coming-soon';


const router = createBrowserRouter([
  {
    Component:HomeLayout,
    children:[
      {
        index:true , Component:Home
      },{
        path:'about',
        Component:ComingSoon
      },{
        path:'products',
        Component:ComingSoon
      },{
        path:'contact',
        Component:ComingSoon
      }
    ]
  },
  {
    Component:AuthLayout,
    children:[
      {
        path:'signIn',
        Component:SignIn
      },{
        path:'register',
        Component:Register
      },{
        path:'edit-profile',
        element: <EditProfile />,
        loader:()=>{return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Anshjain638');
    }, 3000);
  });


},
action: async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log('Form data:', data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve( { success: true, data })
    }, 3000)})
  
},
hydrateFallbackElement:(
    <div>
      <span>Loading...</span>
    </div>
  )

      }
    ]
  },
  {
    path: '*', 
    element: <NotFound />,
  },
])


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

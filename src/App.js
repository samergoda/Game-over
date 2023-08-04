
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './component/Home/Home'
import Platform from './component/Platform/Platform'
import All from './component/All/All'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Sortby from './component/Sortby/Sortby'
import Layout from './component/Layout/Layout'
import Category from './component/Category/Category';
import Details from './component/Details/Details'
import { Offline } from 'react-detect-offline';
import jwtDecode from 'jwt-decode'
// import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';




function App() {

useEffect(() => {
  if (localStorage.getItem('userToken')!==null) {
    saveUserData()
  }

  
}, [])




const [userData, setuserData] = useState(null)

function saveUserData() {
  let encodeToken= localStorage.getItem('userToken')
 let decodeToken = jwtDecode(encodeToken);
//  console.log(decodeToken);
 setuserData(decodeToken)
}

  const routers = createBrowserRouter([
    {path:"",element:<Layout setuserData={setuserData} userData={userData}/>, children:[
      {path:'Home', element:<Home/> },
      {path:"All",element:<All/>},
      {path:"Login",element:<Login saveUserData={saveUserData}/>},
      {path:"Platform/:type",element:<Platform/>},
      {path:"Platform/:id",element:<Platform/>},{index:true,element:<Register/>},
      {path:"Sortby/:type",element:<Sortby/>},
      {path:"Details/:id",element:<Details/>},
      {path:"Category/:type",element:<Category/>},



    
  
    ]}]
  )
  return  <>

  <RouterProvider router ={routers}> </RouterProvider>
  
  <Offline><div className='offline alert'>
  No connection with server. check your network settings.
    </div>
    </Offline>
  </>
}

export default App;

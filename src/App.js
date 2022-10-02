import React from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'

const App = () => {
  return (
    <div>

      <HomeScreen/>
    </div>
  )
}

export default App



// import React, { useEffect } from 'react';
// import HomeScreen from './components/HomeScreen/HomeScreen';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './components/Login/Login';
// import './App.css';
// import { auth } from './firebase';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, logout, selectUser } from './features/userSlice';
// import ProfileScreen from './components/ProfileScreen/ProfileScreen';


// function App() {
// const user = useSelector(selectUser);
// const dispatch=useDispatch();

// useEffect(()=>{
// const unsubscribe=auth.onAuthStateChanged(userAuth=>{
// if(userAuth)
// {
//   // log in
//   dispatch(login({
//     uid:userAuth.uid,
//     email:userAuth.email,
//   }
//   ));
// }
// else {

// // logout
// dispatch(logout());


// }

// });

// return unsubscribe;

// },[dispatch])
//   return (
//     <div className="App">
//     <BrowserRouter>
//     {!user ? (
//       <Login />
//     ) : (
//         <Routes>
//          <Route path="/" exact element={<HomeScreen />} />
//          <Route path="/profile"  element={<ProfileScreen />} />
        
//         </Routes>
                 
//    )}

//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;

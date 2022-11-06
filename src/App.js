import React,{ useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51LwVUoAKvFnf9g943ffyfone38922RM2mEQUEiJFu8jA9AorZ9gUngdUrOrWbAk25gCO8eeI2geWjH6wg2mDJZWm00QwSWg4MC');
function App() {



  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...(because the array is empty in the line below)
auth.onAuthStateChanged(authUser => {
console.log('THE USER IS >>> ', authUser);
if(authUser){
// the user just logged in / the user was logged in 
dispatch({
type: 'SET_USER',
user: authUser


})

}else {
// the user is logged out 
dispatch({
type: 'SET_USER',
user:null


})
}



})
  },[])


  return (
    //BEM
    <Router>
      <div className="App">
        {/* Header is shared between pages so he can stay outside the Switch */}

        <Routes>
        <Route
        path="/orders"
        element={
          <>
            <Header />
            <Orders />
          </>
        }
      />
        <Route path="/login" element={<Login />} />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
              <Payment />
              </Elements>
            </>
          }
          
          
          />
          {/* should be always at the bottom, as it won't work if in top won't be listened to  */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Jw4WwKk6MDQKEwfxHl5Pr4TzY0aHWlk9N0oS8F9cU5b8Kuwsqkcqrxq5OY4YFxOMqa7EuSUopJ92HD3ZjYAsGtl00zXj6Afzq"
);

function App() {
  const [{}, dispatch] = useStateValue();
  
 
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The use is >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/orders'>
            <Navbar />
            <Header />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Navbar />
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Navbar />
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Navbar />
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

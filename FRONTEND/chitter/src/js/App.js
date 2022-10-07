import MakePost from "../jsx/MakePost";
import Home from "../jsx/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import SignUp from "../jsx/SignUp";
import Login from '../jsx/Login';
import Footer from "../jsx/Footer";
import Header from "../jsx/Header";




function App() {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);




  useEffect(() => {
    getData();

  }, [change]);


  const logInHandler = () => {
    setLoggedIn(!loggedIn);
  }


  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:4000/chitterPosts');
      const postData = res.data;
      setData([...postData].reverse());
      setChange(false);
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <Router>
      {user && loggedIn ? <Header currentUser={user} logInHandler={logInHandler} /> : <Header />}
      <Routes>
        <Route path='/' element={user && loggedIn ? <Home post={data} currentUser={user} /> : <Home post={data} />} />
        <Route path="/chitterPost" element={<MakePost setChange={setChange} currentUser={user} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login currentUser={user} setCurrentUser={setUser} logIn={loggedIn} logInHandler={logInHandler} />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

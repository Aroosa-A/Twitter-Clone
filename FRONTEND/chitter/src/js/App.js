import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { lazy, Suspense } from "react";
import Loading from '../jsx/Loading';
// import SignUp from "../jsx/SignUp";
// import Login from '../jsx/Login';
// import Footer from "../jsx/Footer";
// import Header from "../jsx/Header";
// import MakePost from "../jsx/MakePost";
// import Home from "../jsx/Home";


const SignUp = lazy(() => import('../jsx/SignUp'));
const Login = lazy(() => import('../jsx/Login'));
const Footer = lazy(() => import('../jsx/Footer'));
const Header = lazy(() => import('../jsx/Header'));
const MakePost = lazy(() => import('../jsx/MakePost'));
const Home = lazy(() => import('../jsx/Home'));


function App() {
  const [data, setData] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);




  useEffect(() => {

    getData();

  }, [isChange]);


  const logInHandler = () => {
    setLoggedIn(!isLoggedIn);
  }


  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:4000/chitterPosts');
      const postData = res.data;
      setData([...postData].reverse());
      setIsChange(false);
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        {user && isLoggedIn ? <Header currentUser={user} logInHandler={logInHandler} /> : <Header />}
        <Routes>
          <Route path='/' element=
            {user && isLoggedIn ? <Home post={data} currentUser={user} /> : <Home post={data} />} />
          <Route path="/chitterPost" element={<MakePost setChange={setIsChange} currentUser={user} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login currentUser={user} setCurrentUser={setUser} logIn={isLoggedIn} logInHandler={logInHandler} />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;

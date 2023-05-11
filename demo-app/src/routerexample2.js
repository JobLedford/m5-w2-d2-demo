import React from "react";
import {
  BrowserRouter as Router, Routes,Route,Link,Outlet,useParams
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/about" element={ <About />} />
            <Route path="/topics" element={<Topics />}>
              <Route path="" element={<Info />} />
              <Route path=":topicId" element={<Topic />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </Router>
  );

  //Components
  function Home() {
    return (
      <div>
        <h2>Home</h2>
        <p>This is home</p>
      </div>
    );
  }

  function About() {
    return(
      <div>
        <h2>About</h2>
        <p>This is about</p>
      </div>
    );
  }

  function Topics() {
    return (
      <div>
        <h2>Topics</h2>

        <ul>
          <li>
          <Link to="cats">Cats</Link>
          </li>
          <li>
            <Link to="dogs">Dogs</Link>
          </li>
        </ul>

        {/* Render the child routes using Outlet */}
        <Outlet />
      </div>
    );
  }

  function Topic() {
    let { topicId } = useParams();
    return (
      <h3>Requested topic ID: {topicId}</h3>
    );
  }

  function Info() {
    return (
      <h3>Please select a topic</h3>
    );
  }
}

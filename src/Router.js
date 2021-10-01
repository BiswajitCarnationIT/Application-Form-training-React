import React from "react";
import About from "./components/Router/About";
import Contact from "./components/Router/Contact";
import Error from "./components/Router/Error";
import Navbar from "./components/Router/Navbar";
import Search from "./components/Router/Search";
import Service from "./components/Router/Service";
import User from "./components/Router/User";
import "./Style.css";
import { Route, Switch,Redirect } from "react-router";


const Router = () => {
  const Name = () => {
    return <h1>Welcome to name page</h1>;
  };
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={()=><About name='About(prop)'/>} />  {/*Passing prop */}
        <Route exact path="/service" component={()=><Service name='Service(prop)'/>} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/name" component={Name} />
        <Route exact path="/user/:fname/:lname" component={User} />
        {/* <Route component={Error} /> */}
        <Redirect to="/search"/>
      </Switch>
    </>
  );
};

export default Router;

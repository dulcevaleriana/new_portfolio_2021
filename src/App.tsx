import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './component/menu';

import './App.css';
import './css/style.scss';

import Home from './view/home';
import Portfolio from './view/portfolio';
import AboutMe from './view/aboutMe';
import Contact from './view/contact';

import GoogleEasyTranslate from './component/googleEasyTranslate';

// import Animate from './component/animate';
const menuList = [
  {
    link:'/',
    name:'Home',
    page:<Home/>
  },
  {
    link:'/Portfolio',
    name:'Portfolio',
    page:<Portfolio/>
  },
  {
    link:'/aboutMe',
    name:'About Me',
    page:<AboutMe/>
  },
  {
    link:'/contact',
    name:'Contact',
    page:<Contact/>
  }
  // ,
  // {
  //   link:'/animatePrueba',
  //   name:'animatePrueba',
  //   page:<Animate/>
  // }
];
function App() {

  return (
    <Router>
      <>
      <Menu menuList={menuList}/>
      <GoogleEasyTranslate/>
        <Switch>
          {menuList.map((list:any,i:any) =>
            <Route key={i} exact path={list.link}>
              {list.page}
            </Route>
          )}
        </Switch>
      </>
    </Router>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './component/menu';

import './App.css';
import './css/style.scss';

import Portfolio from './view/portfolio';
import AboutUs from './view/aboutUs';
import Contact from './view/contact';

//import Animate from './component/animate';
const menuList = [
  {
    link:'/',
    name:'Portfolio',
    page:<Portfolio/>
  },
  {
    link:'/aboutUs',
    name:'About Us',
    page:<AboutUs/>
  },
  {
    link:'/contact',
    name:'Contact',
    page:<Contact/>
  }
];
function App() {
  return (
    <Router>
      <>
      <Menu menuList={menuList}/>
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

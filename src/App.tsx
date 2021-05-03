import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './component/nemu';

import './App.css';
import './css/style.scss';

import Animate from './component/animate';
const menuList = [
  {
    link:'/',
    name:'Portfolio',
    page:<Animate/>
  },
  {
    link:'/aboutUs',
    name:'About Us',
    page:'lala'
  },
  {
    link:'/contact',
    name:'Contact',
    page:'lolo'
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

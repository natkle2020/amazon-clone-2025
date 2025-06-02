import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Carousel from './components/carousel/CarouselEffect';
import Catagory from './components/Category/Category';
import Product from './components/product/Product';
import Routing from './Routing'; 
import { DataContext } from './components/DataProvider/DataProvider';
import { Type } from './utility/action.type';
import {auth} from "./utility/firebase";


function App() {

  const [{user},dispatch]=useContext(DataContext)

useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if (authUser) {
   
    dispatch({
      type :Type.SET_USER,
      user:authUser
    })
    }else{
      dispatch({
        type :Type.SET_USER,
        user:null,
      })
}
})
},[])
return (
    <Router>
     
      <Routing />
       
    </Router>
  );
}

export default App;

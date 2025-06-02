// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDom from 'react-dom/client';
import './index.css'
import DataProvider  from './components/DataProvider/DataProvider';

import {reducer,initialstate} from "./utility/reducer.jsx"



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
 
<DataProvider reducer={reducer}initialstate={initialstate} >

<App/>

</DataProvider>

);
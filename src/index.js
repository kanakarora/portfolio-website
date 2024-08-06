import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Skills from "./components/Skills";
import Projects from "./components/projects";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";
import Home from "./components/Home";
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider} from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>

const router = createBrowserRouter(createRoutesFromElements(
  
  <Route exact path="/" element={<App/>} >
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<AboutMe />} />
      <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
            
    <Route path="/contact" element={<Contact />} />
    </Route>
 
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Notfound from './Components/Notfound/Notfound'
import Header from './Components/Header/Header'

 let active=(elem)=> {

    document.querySelectorAll('ul li a.active').forEach(function(item) {
        item.classList.remove('active');
      })
    elem.classList.add("active");
    elem.classList.remove("active")
    elem.classList.add("active")

 }
let routers = createBrowserRouter([{path:"" , element:<Layout active={active}/> ,children:[{index:true , element:<Header/>},{path:"portfolio",element:<Portfolio/>}, {path:"about",element:<About/>},{path:"contact",element:<Contact/>},{path:"*",element:<Notfound/>}]}])


export default function App() {

return <>
<RouterProvider router={routers}></RouterProvider>


</>


}

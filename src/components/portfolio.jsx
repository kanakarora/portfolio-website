

import Header from "./Header";

import { Outlet } from "react-router";


  const Portfolio = () =>{
    return (<>
       <Header/>
      <Outlet/>
        </>
    )
}

export default Portfolio;
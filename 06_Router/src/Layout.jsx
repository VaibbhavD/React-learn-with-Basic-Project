import React from "react";
import {Outlet} from 'react-router-dom'
import Header from "./copmonents/Header/Header";
import Footer from "./copmonents/Footer/Footer";


function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout


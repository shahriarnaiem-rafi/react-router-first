import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import './Root.css';
const Root = () => {
    return (
        <div>
           <Header></Header>
           <div className='root-main'>
           <Sidebar></Sidebar>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;
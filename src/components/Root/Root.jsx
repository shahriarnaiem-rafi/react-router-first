import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useNavigate } from 'react-router';
import './Root.css';
const Root = () => {
    const navigation = useNavigate();
    const isNavigating = Boolean(navigation.location);


    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <Sidebar></Sidebar>
                {isNavigating && <span>loading....</span>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
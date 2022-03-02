import React, { Component } from 'react';

import { IoBarChartSharp, IoTimerSharp, IoCashOutline, IoCart, IoPeopleSharp, IoFolderOpenSharp, IoLibrarySharp, IoAirplaneSharp, IoCardSharp, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter} from "react-icons/io5";
import {FaEllipsisH} from "react-icons/fa";
import {SideBarContainer, SideBarItem, SideBarFooter, SideBarFooterItems, SideBarFooterItem, SideBarItems} from './styles';

import { IconButton } from '../../ui/buttons';
function SideBar(props) {
    return ( 
        <SideBarContainer>
            <SideBarItems>
                <SideBarItem className="dashboardMenu" href="#"><IoTimerSharp></IoTimerSharp> Dashboard</SideBarItem>
                <SideBarItem className="dashboardMenu" href="#"><IoCashOutline></IoCashOutline> Sales</SideBarItem>
                <SideBarItem className="dashboardMenu" href="#"><IoLibrarySharp></IoLibrarySharp> Products</SideBarItem>
                <SideBarItem className="dashboardMenu" href="#"><IoPeopleSharp></IoPeopleSharp> Customers</SideBarItem>
                <SideBarItem className="dashboardMenu" href="#"><IoFolderOpenSharp></IoFolderOpenSharp> Inquiries</SideBarItem>
                <SideBarItem className="dashboardMenu" href="#"><IoCart></IoCart> Orders</SideBarItem>
                <SideBarItem className="dashboardMenu" href="#"><IoBarChartSharp></IoBarChartSharp> Reports</SideBarItem>
                <SideBarItem className="dashboardMenu" href="#"><IoCardSharp></IoCardSharp> Membership</SideBarItem>
                <SideBarItem className="dashboardMenu" href="#"><IoAirplaneSharp></IoAirplaneSharp> Deliveries</SideBarItem>
                <SideBarItem className="dashboardMenu" href="#"><FaEllipsisH></FaEllipsisH> Other</SideBarItem>
            </SideBarItems>

            <SideBarFooter>
                <SideBarFooterItems>
                    <SideBarFooterItem><IconButton className='iconButton'><IoLogoFacebook></IoLogoFacebook></IconButton></SideBarFooterItem>
                    <SideBarFooterItem><IconButton className='iconButton'><IoLogoInstagram></IoLogoInstagram></IconButton></SideBarFooterItem>
                    <SideBarFooterItem><IconButton className='iconButton'><IoLogoTwitter></IoLogoTwitter></IconButton></SideBarFooterItem>
                </SideBarFooterItems>
            </SideBarFooter>
        </SideBarContainer>
     );
}

export default SideBar;
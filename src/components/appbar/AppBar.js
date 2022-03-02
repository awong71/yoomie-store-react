import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { IoEllipsisVertical, IoNotificationsSharp, IoEnterSharp, IoSearchCircleSharp} from 'react-icons/io5';
import { IconButton } from '../../ui/buttons';
import logo from './logo-nobg.png'

import {AppBarStyles, AppBarItems, AppBarItemGroup, AppBarItem, AppBarLogo} from './styles'


function AppBar(props) {
    return ( 
        <AppBarStyles>
            <AppBarItems>
                <IconButton className='iconButton'><AppBarItem><AppBarLogo src={logo} height="45px"></AppBarLogo></AppBarItem></IconButton>
                <AppBarItemGroup>
                <IconButton className='iconButton'>
                        <IoNotificationsSharp size="1.25rem"/>
                    </IconButton>
                    <IconButton className='iconButton'>
                        <IoSearchCircleSharp size="1.5rem"/>
                    </IconButton>
                    <IconButton className='iconButton'>
                        <IoEllipsisVertical size="1.25rem"/>
                    </IconButton>
                    <IconButton >
                        <Link to="/" style={{color:"#494949"}}><IoEnterSharp size="1.5rem"/></Link>
                    </IconButton>
                    
                </AppBarItemGroup>
            </AppBarItems>
        </AppBarStyles>
     );
}

export default AppBar;
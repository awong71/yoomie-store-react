import React from 'react';

import { signOut } from 'firebase/auth'
import { auth } from './../../libs/firebase'


import { IoEllipsisVertical, IoNotificationsSharp, IoEnterSharp, IoSearchCircleSharp} from 'react-icons/io5';
import { IconButton } from '../../ui/buttons';
import logo from './logo-nobg.png'

import {AppBarStyles, AppBarItems, AppBarItemGroup, AppBarItem, AppBarLogo} from './styles'


function AppBar(props) {

    function onLogoutRequest(e){
        signOut(auth)
    }


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
                    <IconButton onClick={onLogoutRequest}>
                            <IoEnterSharp size="1.5rem"/>
                    </IconButton>
                    
                </AppBarItemGroup>
            </AppBarItems>
        </AppBarStyles>
     );
}

export default AppBar;
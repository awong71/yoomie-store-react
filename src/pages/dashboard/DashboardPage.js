import React, { useState } from 'react';
import { AppBar } from '../../components/appbar';
import { SideBar } from '../../components/sidebar';
import { DashboardPanel } from '../../components/panels';

import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './../../libs/firebase'

function DashBoardPage(props) {
    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();

        onAuthStateChanged(auth, (user)=>{
            if(user){
                setIsUser(true)
            }else{
                setIsUser(false)
                navigator('/')
            }
        })

        if(isUser){
            return(
        <>
            <AppBar/>
            <div className='panelMainContainer'>
                <SideBar/>
                <DashboardPanel/>
            </div>
           
        </>
            )
        
        }else{
            return null
        }
}

export default DashBoardPage;
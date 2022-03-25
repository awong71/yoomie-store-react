import React, {useState} from 'react';
import {PageNotFoundStyles} from './styles'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './../../libs/firebase'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();

        onAuthStateChanged(auth, (user)=>{
            if(user){
                setIsUser(true)
            }else{
                setIsUser(false)
            }
        })

    return ( 
        <>
                <PageNotFoundStyles style={{ backgroundImage: "url(/img/404-img.jpg)"}}>
                    {
                        isUser? <Link to='/dashboard'>Return to Dashboard</Link> : <Link to='/'></Link>
                    }
                </PageNotFoundStyles>
        </>
     );
}

export default PageNotFound;
import React, {useState} from 'react';

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
            <header>
                <h1>Error 404: Page Not Found</h1>
                {
                    isUser? <Link to='/dashboard'>Return to Dashboard</Link> : <Link to='/'></Link>
                }
            </header>
        </>
     );
}

export default PageNotFound;
import React, { useEffect } from 'react';

import LoginHeader from './LoginHeader';
import ShopHeader from './ShopHeader';

const Header = (props) => {
    const { view, setView } = props;

    useEffect(() => {

    })

    

    return (
        <>
            {view == 0 && 
                <LoginHeader />    
            }
            {view == 1 &&
                <ShopHeader setView={setView}/>
            }
            <div style={{width: '50%', minHeight: '25px', borderRadius: '10px', backgroundColor: '#f5426c', margin: 'auto'}}></div>
        </>
    );

}

export default Header;

{/* <div style={{color: 'white', justifySelf: 'flex-end', alignItems: 'center'}}>
                    <IconButton onClick={logout} style={{color: 'white'}}>
                        <LogoutIcon fontSize='large'/>
                    </IconButton>
                </div> */}
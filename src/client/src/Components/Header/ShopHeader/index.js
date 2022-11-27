import React from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';

const ShopHeader = (props) => {
    const { setView } = props;


    const logout = () => {
        console.log("Logging Out");
        setView(0);
    }

    return (
        <div style={{display: 'flex', width: '100%', minHeight: '100px', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextField 
                variant='filled'
                disableunderline="true"
                hiddenLabel
                size="small"
                style={{marginLeft: 'auto'}}
                InputProps={{
                    style: {
                        padding: 0,
                        margin: 0,
                    },
                    disableUnderline: true,
                    startAdornment: 
                        <InputAdornment position="start">
                            <SearchIcon style={{color: 'black'}}/>
                        </InputAdornment>
                }}
            ></TextField>
            <IconButton onClick={logout} style={{marginLeft: 'auto', width: "5%", color: 'black', alignSelf: 'center'}}>
                <LogoutIcon fontSize='large'/>
            </IconButton>
        </div>
    );
}

export default ShopHeader;
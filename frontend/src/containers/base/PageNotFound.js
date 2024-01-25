import React from 'react';
import { Typography } from '@mui/material';

const PageNotFound = () => {
    return (
    <div className='container'>
        <div style={{"display":"inline-flex", "flexDirection":"column", "height":"100vh", "width":"100%", "justifyContent":"center", "alignItems": "center"}}>
            <Typography variant="h1"  fontWeight="800" align="center">
                404 not found
            </Typography>
        </div>  
    </div>
    );
};

export default PageNotFound;

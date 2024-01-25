import { Box,Typography,Button } from '@mui/material'
import React from 'react'
import { TextField } from '@mui/material';
import Switch from '@mui/material/Switch'

  
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Pricing = () => {
  return (
    <Box>
        <Box>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="search" variant="standard" />
    </Box>
    <Box className='pricing' sx={{width:'20vw', height:'63vh', margin:'auto', borderRadius:'15px', marginBottom:'3vh'}}>
            <Box sx={{display:'flex', justifyContent:'space-around'}}>
            <Typography sx={{marginTop:'2vh',}} >Pro</Typography>
            <Box>
            <Typography sx={{marginTop:'2vh',}}>Billed yearly</Typography>
            <Switch {...label} defaultChecked />
            </Box>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <Typography variant='h4' sx={{marginLeft:'6px'}}>$15/month</Typography>
                <Typography variant='h6' sx={{marginTop:'3vh', marginLeft:'6px'}}>Create like a pro</Typography>
                <ul>
                    <li className='pricing-li'>Unlimited videos</li>
                    <li className='pricing-li'>Unlimited recording duration</li>
                    <li className='pricing-li'>Instant sharing</li>
                    <li className='pricing-li'>Watermark-free downloads</li>
                </ul>
                <Button variant='text'>Upgrade</Button>
            </Box>
      
    </Box>
        </Box>
    </Box>
    
  )
}

export default Pricing

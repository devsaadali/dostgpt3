import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function LoadingScreen({loading}) {
  return (
    loading && (
        <Box sx={{zIndex:9999999999, cursor:"wait", backdropFilter: "blur(3px)", position:"fixed", top:0, left:0, minHeight:'100vh', minWidth:"100%", bgcolor:"rgba(255,255,255,0.1)", display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Box>
                        <CircularProgress />
                    </Box>
        </Box>
    )
  )
}

export default LoadingScreen
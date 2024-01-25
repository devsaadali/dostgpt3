import { Box } from '@mui/system'
import React from 'react'

const Container = ({ children, bgcolor="#F9F9F9" }) => {
  return (
    <Box sx={{
      padding: '20px', bgcolor: bgcolor, borderRadius: 6,
      border: "1px solid #ededed",
      boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.04),0px 3px 4px 0px rgba(0,0,0,0.06),0px 1px 8px 0px rgba(0,0,0,0.04)"
    }}>
      {children}
    </Box>
  )
}

export default Container
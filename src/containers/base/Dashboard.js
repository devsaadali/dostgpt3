import React, { useEffect, useState } from 'react'
import { Alert, Box, Link, Typography } from '@mui/material'

import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { axios_get_call } from '../../components/AxiosCall';

const Dashboard = ({ user }) => {

  const [alert, set_alert] = useState(false);
  const [loading, set_loading] = useState(false);
  const [user_summaries, set_user_summaries] = useState(false);

  const navigate = useNavigate()


  const get_something_from_backend = async () => {
    let url = '/';
    let res = await axios_get_call(url, {}, set_loading, set_alert);

    if (res.data.status == 1) {
      set_loading(false);
      set_user_summaries(res.data.response);
    } else if (res.data.status == 0) {
      set_alert(res.data.response);
      set_loading(false);
    }
  }

  useEffect(() => {
    get_something_from_backend()
  }, [])

  useEffect(() => {
    if (!(localStorage.getItem('access'))) {
      navigate('/login')
    }
  }, [])

  return (
    user ? <Box>

      {alert ? (
        <Alert
          onClose={() => {
            set_alert(false);
          }}
          severity={alert.toLowerCase().includes('[error]') ? 'error' : 'info'}
          sx={{
            p: 2,
            mb: 2,
            width: 1,
            zIndex: 9923213,
          }}
        >
          {alert}
        </Alert>
      ) : (
        ''
      )}
      <Typography align='center' variant='h1'>Dashboard</Typography>
    
    </Box> : ''
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(Dashboard);
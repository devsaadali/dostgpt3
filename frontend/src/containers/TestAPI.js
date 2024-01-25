import React, { useEffect, useState } from 'react'
import { Alert, Box, Typography } from '@mui/material'

import { axios_get_call } from "../components/AxiosCall";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TestAPI = ({ user }) => {

    const [alert, set_alert] = useState(false);
    const [loading, set_loading] = useState(false);
    const [teams, set_teams] = useState(false);

    const navigate = useNavigate()

    const get_teams = async () => {
        let url = "/saas/team/get-teams/";
        let res = await axios_get_call(url, {}, set_loading, set_alert);

        if (res.data.status == 1) {
            set_loading(false);
            set_teams(res.data.response);
        } else if (res.data.status == 0) {
            set_alert(res.data.response);
            set_loading(false);
        }
    }

    useEffect(() => {
        get_teams()
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
                    severity={alert.toLowerCase().includes("[error]") ? "error" : "success"}
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
            <Box sx={{display:"flex"}}>
                <Box sx={{flex:1}}></Box>
                <Box sx={{flex:1}}></Box>
            </Box>
            <Typography align='center'>TestAPI</Typography>
            <Typography align='center'>
                {typeof teams}
            </Typography>
        </Box> : ""
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps, {})(TestAPI);
import axios from "axios";
import csrf_grabber from "../components/csrf_grabber";

import { useNavigate } from "react-router-dom";
import { alert_box } from "../components/alert_structure";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
  FACEBOOK_AUTH_SUCCESS,
  FACEBOOK_AUTH_FAIL,
  LOGOUT,
} from "./types";
import Alert from "@mui/material/Alert";
// import gtagEvent from "../components/grab_user_analytics";
var csrftoken = csrf_grabber("csrftoken");


export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "X-CSRFToken": csrftoken,
        "Authorization": `Bearer ${localStorage.getItem("access")}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    };
    const body = JSON.stringify({
      access_token: localStorage.getItem("access"),
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/get-user-data/`,
        body,
        config
      );
      if (res.data.status == 401) {
        let html = alert_box("User doesn't exist", 'alertBoxError');
        let AlertManager = document.getElementById("AlertsManager");
        AlertManager.innerHTML += html;
        dispatch({
          type: LOGOUT,
        });
      
      }
      if (res.data.status == 1) {
        dispatch({
          type: USER_LOADED_SUCCESS,
          payload: res.data.response,
        });
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
     
      } else if (res.data.status == 0) {

        let html = alert_box(res.data.response, 'alertBoxError');

        let AlertManager = document.getElementById("AlertsManager");
        AlertManager.innerHTML += html;
        dispatch({
          type: LOGOUT,
        });
      
        dispatch({
          type: USER_LOADED_FAIL,
        });
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: LOGOUT,
      });
    
      dispatch({
        type: USER_LOADED_FAIL,
      });
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: LOGOUT,
    });
  
    dispatch({
      type: USER_LOADED_FAIL,
    });
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const delete_user = () => async (dispatch) => {

  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "X-CSRFToken": csrftoken,
        "Authorization": `Bearer ${localStorage.getItem("access")}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    };
    const body = JSON.stringify({
      access_token: localStorage.getItem("access"),
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/delete-user-data/`,
        body,
        config
      );
      if (res.data.status == 1) {
        let html = alert_box("User deleted!", 'alertBoxInfo');
        let AlertManager = document.getElementById("AlertsManager");
        AlertManager.innerHTML += html;
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        dispatch(load_user());
        // gtagEvent("DELETE", "USER", "Delete User", 1)
      } else if (res.data.status == 0) {
        let html = alert_box(res.data.response, 'alertBoxError');

        let AlertManager = document.getElementById("AlertsManager");
        AlertManager.innerHTML += html;

      }
    } catch (err) {
      console.log(err);
    }
  }
};


export const googleAuthenticate = (accessToken) => async (dispatch) => {
  if (!localStorage.getItem("access")) {
    const config = {
      headers: {
        "X-CSRFToken": csrftoken,
        "Content-Type": "application/json",
      },
    };
    const inputs = JSON.stringify({
      token: accessToken,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret:
        process.env.REACT_APP_CLIENT_SECRET,
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/convert-token`,
        inputs,
        config
      );
      console.log(res);
      dispatch({
        type: GOOGLE_AUTH_SUCCESS,
        payload: res.data,
      });
      let html = alert_box("You have logged in with Google successfully", 'alertBoxSuccess');
      let AlertManager = document.getElementById("AlertsManager");
      AlertManager.innerHTML += html;
      // gtagEvent("Google Login", "AUTH", "Login User", 1);
      dispatch(load_user());
    } catch (err) {
      console.log(err);
      dispatch({
        type: GOOGLE_AUTH_FAIL,
      });
      let html = alert_box("Cannot login with Google", 'alertBoxError');
      let AlertManager = document.getElementById("AlertsManager");
      AlertManager.innerHTML += html;
    }
  }
};

export const facebookAuthenticate = (accessToken) => async (dispatch) => {
  if (!localStorage.getItem("access")) {
    const config = {
      headers: {
        "X-CSRFToken": csrftoken,
        "Content-Type": "application/json",
      },
    };
    const inputs = JSON.stringify({
      token: accessToken,
      backend: "facebook",
      grant_type: "convert_token",
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret:
        process.env.REACT_APP_CLIENT_SECRET,
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/convert-token`,
        inputs,
        config
      );

      dispatch({
        type: FACEBOOK_AUTH_SUCCESS,
        payload: res.data,
      });
      let html = alert_box("You have logged in with Facebook successfully", 'alertBoxSuccess');
      let AlertManager = document.getElementById("AlertsManager");
      AlertManager.innerHTML += html;
      // gtagEvent("Facebook Login", "AUTH", "Login User", 1);
      dispatch(load_user());

    } catch (err) {
      dispatch({
        type: FACEBOOK_AUTH_FAIL,
      });
      let html = alert_box("Cannot login with Facebook", 'alertBoxError');
      let AlertManager = document.getElementById("AlertsManager");
      AlertManager.innerHTML += html;
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    username: email,
    password: password,
    grant_type: "password",
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret:
      process.env.REACT_APP_CLIENT_SECRET,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/token/`,
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    // gtagEvent("Login", "AUTH", "Login User", 1);
    let html = alert_box("You are successfully logged In", 'alertBoxSuccess');
    let AlertManager = document.getElementById("AlertsManager");
    AlertManager.innerHTML += html;
    dispatch(load_user());
  } catch (err) {
    
    let html = alert_box("Email or password is incorrect. Unverified email can cause this issue too.", 'alertBoxError')
    let AlertManager = document.getElementById("AlertsManager");
    AlertManager.innerHTML += html;
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const signup =
  (username, language, email,  password1, password2) =>
    async (dispatch) => {
      const config = {
        headers: {
          "X-CSRFToken": csrftoken,
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        username,
        language,
        email,
        
        password1,
        password2,
      });

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/auth/register/`,
          body,
          config
        );

        // gtagEvent("Register", "AUTH", "Register User", 1);
        let marginBottom = 0;
        if (res.data.status == 1) {
          localStorage.setItem('access', res.data.response);
        dispatch(load_user());
          return res.data.status
        } else if (res.data.status == 0) {
          Object.keys(res.data.response).map((key) => {
            res.data.response[key].map((error) => {
              let html = alert_box(error, 'alertBoxError');

              let AlertManager = document.getElementById("AlertsManager");
              AlertManager.innerHTML += html;
            });
          });
        }
      } catch (err) {
        console.log("Error on registration: ", err);
      }
    };

    export const verify = (uid, token) => async (dispatch) => {
      const config = {
        headers: {
          "X-CSRFToken": csrftoken,
          "Content-Type": "application/json",
        },
      };
    
      const body = JSON.stringify({ uid, token });
    
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/auth/activate/${uid}/${token}/`,
        config
        );
      if (res.data.status == 1) {
        let html = alert_box("Account verified successfully, logging in!", 'alertBoxSuccess');
        // gtagEvent("Verify Account", "AUTH", "Verify Registered User Account", 1);
        let AlertManager = document.getElementById("AlertsManager");
        AlertManager.innerHTML += html;
        localStorage.setItem('access', res.data.response);
        dispatch(load_user());
        window.location.href = "/dashboard"
      } else if (res.data.status == 0) {
        let html = alert_box(res.data.response + " Try to login. If fail to login, contact support.", 'alertBoxError');
        let AlertManager = document.getElementById("AlertsManager");
        AlertManager.innerHTML += html;
        return 0
      }
    };
    

export const reset_password = (email, redirect_url) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
  };

  const body = JSON.stringify({ email: email, redirect_url: redirect_url });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/reset-password/`,
      body,
      config
    );
  return res.data
  } catch (err) {
    let html = alert_box("Cannot find email.", 'alertBoxError');

    let AlertManager = document.getElementById("AlertsManager");
    AlertManager.innerHTML += html;
  }
};
export const reset_password_confirm =
  (uidb64, token, password) => async (dispatch) => {

    const config = {
      headers: {
        "X-CSRFToken": csrftoken,
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ password, uidb64, token });
    if (uidb64 == null || token == null) {
      let html = alert_box("Token is used of expired, try to login or contact support.", 'alertBoxWarning');


      let AlertManager = document.getElementById("AlertsManager");
      AlertManager.innerHTML += html;
      return;
    }
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/password-reset-complete`,
        body,
        config
      );
      // gtagEvent("Reset Password Completed", "AUTH", "Reset Password Completed", 1);
      return res.data
      
    } catch (err) {
      let html = alert_box("Password is too weak.", 'alertBoxWarning')
      html += alert_box("It must include a capital letter, numbers or special signs to make it more secure.", 'alertBoxWarning')
      

      let AlertManager = document.getElementById("AlertsManager");
      AlertManager.innerHTML += html;
    }
  };

export const get_user_locale_language = async () => {
  const config = {
    headers: {
      "X-CSRFToken": csrftoken,
      "Authorization": `Bearer ${localStorage.getItem("access")}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  };


  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/auth/get-user-locale-language/`,
      config
    )
    if (res.data.status == 1) {

      return res.data.response
    }
  } catch (err) {
    return 'en'
  }
};
export const change_user_locale_language = async (language) => {
  const config = {
    headers: {
      "X-CSRFToken": csrftoken,
      "Authorization": `Bearer ${localStorage.getItem("access")}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  };

  const body = JSON.stringify({ language });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/auth/change-user-locale-language/`,
      body,
      config
    );
    if (res.data.status == 1) {
      let html = alert_box(res.data.response, 'alertBoxSuccess');
      let AlertManager = document.getElementById("AlertsManager");
      AlertManager.innerHTML += html;
    } else if (res.data.status == 0) {
      let html = alert_box(res.data.response, 'alertBoxError');
      let AlertManager = document.getElementById("AlertsManager");
      AlertManager.innerHTML += html;
    }
  } catch (err) {
    let html = alert_box("Couldn't change the language.", 'alertBoxError');

    let AlertManager = document.getElementById("AlertsManager");
    AlertManager.innerHTML += html;
  }
};



export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  // gtagEvent("User Logged Out", "AUTH", "User Logged Out", 1);
  let html = alert_box("You are logged out from your account.", 'alertBoxInfo');
  let AlertManager = document.getElementById("AlertsManager");
  AlertManager.innerHTML += html;
};
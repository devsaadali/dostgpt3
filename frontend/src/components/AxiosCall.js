import axios from "axios";
import csrf_grabber from "./csrf_grabber";
import { useEffect, useState } from "react";
var csrftoken = csrf_grabber("csrftoken");

export const axios_get_call = async (url, params, set_loading, do_not_load) => {
  if (!do_not_load) set_loading(true);

  const config = {
    params: params,
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  if (localStorage.getItem("access")) {
    config["headers"]["Authorization"] = `Bearer ${localStorage.getItem(
      "access"
    )}`;
  }
  const res = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}${url}`,
    config
  );
  return res;
};

export const axios_delete_call = async (url, params, set_loading) => {
  set_loading(true);
  const config = {
    params: params,
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  if (localStorage.getItem("access")) {
    config["headers"]["Authorization"] = `Bearer ${localStorage.getItem(
      "access"
    )}`;
  }
  const res = await axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}${url}`,
    config
  );
  return res;
};
// export const axios_post_call = async (url, body, set_loading, set_alert, content_type = "application/json") => {

//   set_alert(false)
//   set_loading(true);

//   const config = {
//     headers: {
//       "X-CSRFToken": csrftoken,
//       "Content-Type": content_type,
//       Accept: "application/json",
//     },
//   };
//   if (localStorage.getItem("access")) {
//     config['headers']['Authorization'] = `Bearer ${localStorage.getItem("access")}`
//   }
//   const res = await axios.post(
//     `${process.env.REACT_APP_BACKEND_URL}${url}`,
//     body,
//     config
//   );
//   return res

// }

export const axios_post_call = async (url, file, set_loading, set_alert) => {
  set_alert(false);
  set_loading(true);

  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: {
      "X-CSRFToken": csrftoken,
      Accept: "application/json",
    },
  };

  if (localStorage.getItem("access")) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("access")}`;
  }

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}${url}`,
      formData,
      config
    );

    if (res.status === 201) {
      console.log("File uploaded successfully");
    } else {
      console.error("File upload failed");
    }

    return res;
  } catch (error) {
    console.error("Error uploading file", error);
    throw error; // You might want to handle the error appropriately in the calling code
  } finally {
    set_loading(false);
  }
};

export const axios_put_call = async (
  url,
  body,
  set_loading,
  set_alert,
  content_type = "application/json"
) => {
  set_alert(false);
  set_loading(true);

  const config = {
    headers: {
      "X-CSRFToken": csrftoken,
      "Content-Type": content_type,
      Authorization: `Bearer ${localStorage.getItem("access")}`,
      Accept: "application/json",
    },
  };

  const res = await axios.put(
    `${process.env.REACT_APP_BACKEND_URL}${url}`,
    body,
    config
  );
  return res;
};

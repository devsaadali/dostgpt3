import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hocs/Layout";
import "./App.css";

// Base containers
import LandingPage from "./containers/base/LandingPage";
import TermsAndConditions from "./containers/base/TermsAndConditions";
import PrivacyPolicy from "./containers/base/PrivacyPolicy";
import CookiePolicy from "./containers/base/CookiePolicy";
import PageNotFound from "./containers/base/PageNotFound";

// SaaS
import Dashboard from "./containers/base/Dashboard";

// Authentication containers
import Login from "./containers/authentication/Login";
import Signup from "./containers/authentication/Signup";
import Activate from "./containers/authentication/Activate";
import ResetPassword from "./containers/authentication/ResetPassword";
import ResetPasswordConfirm from "./containers/authentication/ResetPasswordConfirm";

// Redux Store
import { Provider } from "react-redux";
import store from "./store";
import Pricing from "./containers/base/Pricing";
import AppSidebar from "./components/AppSidebar";
import NewProjectPage from "./containers/base/NewProjectPage";
import ConfirmPage from "./containers/base/ConfirmPage";
// import Recover from "./components/Recover";
import RecoverPage from "./containers/base/RecoverPage";
import ProjectViewPage from "./containers/base/ProjectViewPage";
import SignUpPage from "./containers/base/SignUpPage";
import SignInPage from "./containers/base/SignInPage";
import UpgradePage from "./containers/base/UpgradePage";
import SettingsPage from "./containers/base/SettingsPage";

const App = () => {
  const mounted = useRef();

  // useEffect(() => {
  //   if (!mounted.current) {
  //     window.gtag("config", "UA-216385747-1", {
  //     page_title: window.location.pathname,
  //     page_path: window.location.pathname,
  //     })
  //     mounted.current = true;
  //   } else {
  //     // do elementDi<dUpdate /> logic
  //   }
  // });

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            {/* // Base Routes */}
            <Route exact path="/" element={<LandingPage />} />
            <Route
              exact
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/cookie-policy" element={<CookiePolicy />} />

            <Route exact path="/dashboard" element={<Dashboard />} />

            <Route path="*" element={<PageNotFound />} />

            {/* // Authentication routes */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/facebook" element={<LandingPage />} />
            <Route exact path="/google" element={<LandingPage />} />
            <Route exact path="/reset-password" element={<ResetPassword />} />
            <Route
              exact
              path="/account-activation-email-sent"
              element={<ResetPassword />}
            />
            <Route
              exact
              path="/password/reset/confirm"
              element={<ResetPasswordConfirm />}
            />
            <Route
              exact
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route exact path="/activate" element={<Activate />} />
            {/* Mine */}
            <Route exact path="/pricing" element={<Pricing />} />
            {/* <Route exact path="/sidebar" element={<AppSidebar />} /> */}
            <Route exact path="/new-project" element={<NewProjectPage />} />
            <Route exact path="/project-view" element={<ProjectViewPage />} />
            <Route exact path="/signup-page" element={<SignUpPage />} />
            <Route exact path="/signin-page" element={<SignInPage />} />
            <Route exact path="/confirm" element={<ConfirmPage />} />
            <Route exact path="/recover" element={<RecoverPage />} />
            <Route exact path="/upgrade" element={<UpgradePage />} />
            <Route exact path="/settings" element={<SettingsPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;

import React, { useEffect, useState, createContext } from "react";
import Dashboard from "../components/dashboard/dashboard";
import { useRouter } from "next/router";
import { loadDBFirebase } from "../lib/firebase";
import { set } from "date-fns";

export const { Provider, Consumer } = createContext();

const DashboardPage = () => {
  const [authUser, setAuthUser] = useState(null);
  const [flagCheck, setFlagCheck] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (authUser !== null && flagCheck === true) {
      console.log("Welcome");
    } else if (authUser === null && flagCheck === true) {
      router.push("/login");
    }
  }, [authUser, flagCheck]);

  const checkAuth = async () => {
    let firebase = await loadDBFirebase();
    firebase.auth().onAuthStateChanged(result => {
      if (result) {
        setAuthUser(result.email);
        setFlagCheck(true);
      } else {
        setAuthUser(null);
        setFlagCheck(true);
      }
    });
  };

  const userSignOut = async () => {
    let firebase = await loadDBFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => setAuthUser(null))
      .catch(err => console.log(err.message));
  };

  return (
    <React.Fragment>
      <Provider value={{ auth: authUser }}>
        <Dashboard />
      </Provider>
    </React.Fragment>
  );
};

export default DashboardPage;

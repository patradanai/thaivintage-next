import React, { useEffect, useState, createContext } from "react";
import Dashboard from "../../components/dashboard/layout";
import { useRouter } from "next/router";
import { loadDBFirebase } from "../../lib/firebase";
import Reserve from "../../components/dashboard/reservation";
import moment from "moment";
export const { Provider, Consumer } = createContext();

const DashboardPage = props => {
  const [authUser, setAuthUser] = useState(null);
  const [flagCheck, setFlagCheck] = useState(false);
  const [reserved, setReserved] = useState([]);
  const router = useRouter();

  useEffect(() => {
    let db = loadDBFirebase().firestore();
    let unsubscribe = db.collection("reservation").onSnapshot(snapshot => {
      let updateList = [];
      snapshot.forEach(data => {
        updateList.push({
          id: data.id,
          name: data.data().name,
          email: data.data().email,
          contact: data.data().contact,
          guestno: data.data().people,
          reserveDate: moment(data.data().date.seconds, "X").format(
            "YYYY-MM-DD"
          ),
          reserveTime: data.data().time,
          promotion: "",
          reserveStatus: data.data().confirm ? "Confirmed" : "Wait Confirm"
        });
      });
      const mergeList = [...reserved, ...updateList];
      setReserved(mergeList);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const data = [...props.payload];
    const updateList = [];
    data.forEach(data =>
      updateList.push({
        id: data.id,
        name: data.name,
        email: data.email,
        contact: data.contact,
        guestno: data.people,
        reserveDate: moment(data.date.seconds, "X").format("YYYY-MM-DD"),
        reserveTime: data.time,
        promotion: "",
        reserveStatus: data.confirm ? "Confirmed" : "Wait Confirm"
      })
    );
    setReserved(updateList);
  }, [props.payload]);

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
      <Provider value={{ auth: authUser, payload: reserved }}>
        {authUser ? (
          <Dashboard>
            <Reserve data={reserved} />
          </Dashboard>
        ) : (
          <h5 style={{ textAlign: "center" }}>Redirect to Login page </h5>
        )}
      </Provider>
    </React.Fragment>
  );
};

DashboardPage.getInitialProps = async () => {
  let firebase = await loadDBFirebase();
  let db = firebase.firestore();
  let data = [];
  const result = await db
    .collection("reservation")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch(err => {});
  return { payload: data };
};

export default DashboardPage;

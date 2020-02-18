import React, { useEffect, useState, createContext } from "react";
import Dashboard from "../../components/dashboard/layout";
import { useRouter } from "next/router";
import { loadDBFirebase } from "../../lib/firebase";
import Reserve from "../../components/dashboard/reservation";
import moment from "moment";
import { da } from "date-fns/locale";
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
          "Reserve No": data.id,
          "Guest Name": data.data().name,
          "E-mail": data.data().email,
          "Contact No": data.data().contact,
          "Number of Guest": data.data().people,
          "Reserve Date": moment(data.data().date.seconds, "X").format(
            "YYYY-MM-DD"
          ),
          "Reserve Time": data.data().time,
          Promotion: "",
          "Reserve Status": data.data().confirm ? "Confirmed" : "Wait Confirm"
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
        "Reserve No": data.id,
        "Guest Name": data.name,
        "E-mail": data.email,
        "Contact No": data.contact,
        "Number of Guest": data.people,
        "Reserve Date": moment(data.date.seconds, "X").format("YYYY-MM-DD"),
        "Reserve Time": data.time,
        Promotion: "",
        "Reserve Status": data.confirm ? "Confirmed" : "Wait Confirm"
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
        ) : null}
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

import React, { useEffect, useState, createContext } from "react";
import Dashboard from "../../components/dashboard/layout";
import { useRouter } from "next/router";
import { loadDBFirebase } from "../../lib/firebase";
import Reserve from "../../components/dashboard/reservation";
import moment from "moment";

const DashboardPage = props => {
  const [reserved, setReserved] = useState([]);

  // Listen Event from Firebase
  useEffect(() => {
    let db = loadDBFirebase().firestore();
    let unsubscribe = db
      .collection("reservation")
      .orderBy("date", "asc")
      .onSnapshot(snapshot => {
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
            reserveStatus:
              data.data().confirm === "confirm"
                ? "Confirmed"
                : data.data().confirm === "waiting"
                ? "Waiting"
                : "Canceled",
            request: data.data().request,
            calendar: data.data().calendarId
          });
        });
        const mergeList = [...reserved, ...updateList];
        setReserved(mergeList);
      });
    return () => {
      unsubscribe();
    };
  }, []);

  // Get Data from getInitialProps
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
        reserveStatus:
          data.confirm === "confirm"
            ? "Confirmed"
            : data.confirm === "waiting"
            ? "Waiting Confirm"
            : "Cancel",
        request: data.request,
        calendar: data.calendarId
      })
    );
    setReserved(updateList);
  }, [props.payload]);

  return (
    <React.Fragment>
      <Dashboard>
        <Reserve data={reserved} />
      </Dashboard>
    </React.Fragment>
  );
};

// Get Install Connect from Firebase
DashboardPage.getInitialProps = async () => {
  let firebase = await loadDBFirebase();
  let db = firebase.firestore();
  let data = [];
  const result = await db
    .collection("reservation")
    .orderBy("date", "asc")
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

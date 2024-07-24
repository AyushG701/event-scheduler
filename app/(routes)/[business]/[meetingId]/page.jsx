"use client";

import React, { useEffect, useState } from "react";
import MeetingEventList from "../../dashboard/meeting-type/_components/MeetingEventList";
import MeetingTimeDateSelection from "../_components/MeetingTimeDateSelection";
import {
  doc,
  getDoc,
  getFirestore,
  where,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";

const SharedMeetingEvent = ({ params }) => {
  const db = getFirestore(app);
  const [businessInfo, setBusinesInfo] = useState();
  const [eventInfo, setEventInfo] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(params);
    params && getMeetingBusinessAndEventDetails();
  }, []);

  /**
   * Used to get Business Info and Event Details for Give Login User/Business Owner
   */
  const getMeetingBusinessAndEventDetails = async () => {
    const q = query(
      collection(db, "Business"),
      where("businessName", "==", params.business),
    );
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      console.log(doc.data());
    });
    const docRef = doc(db, "MeetingEvent", params?.meetingId);
    const result = await getDoc(docRef);
    setEventInfo(result.data());

    setLoading(false);
  };

  return (
    <div>
      <MeetingTimeDateSelection
        eventInfo={eventInfo}
        businessInfo={businessInfo}
      />
    </div>
  );
};

export default SharedMeetingEvent;

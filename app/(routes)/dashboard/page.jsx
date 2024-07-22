"use client";

import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import DashboardLayout from "./layout";
import MeetingType from "./meeting-type/page";

const Dashboard = () => {
  const db = getFirestore(app);
  const { user } = useKindeBrowserClient();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && isBusinessRegistered();
  }, [user]);
  const router = useRouter();

  const isBusinessRegistered = async () => {
    const docRef = doc(db, "Business", user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setLoading(false);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setLoading(false);
      router.replace("/create-business");
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <MeetingType />
      <LogoutLink>Logout</LogoutLink>
    </div>
  );
};

export default Dashboard;

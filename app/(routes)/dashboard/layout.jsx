import React from "react";
import SideNavBar from "./_components/SideNavBar";
import { Toaster } from "sonner";
import DashboardHeader from "./_components/DashboardHeader";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="hidden md:block md:w-64 bg-slate-50 h-screen fixed">
        <SideNavBar />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        <Toaster />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

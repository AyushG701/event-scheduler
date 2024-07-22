"use client";
import React, { useState } from "react";
import EventForm from "./_components/EventForm";
import PreviewEvent from "./_components/PreviewEvent";

const CreateEvent = () => {
  const [formValue, setFormValue] = useState();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Meeting Form  */}
      <div className="shadow-md border h-screen">
        <EventForm setFormValue={(v) => setFormValue(v)} />
      </div>
      {/* Preview  */}
      <div className="md:col-span-2">
        <PreviewEvent formValue={formValue} />
      </div>
    </div>
  );
};

export default CreateEvent;

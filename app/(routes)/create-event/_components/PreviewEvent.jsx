"use client";

import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const PreviewEvent = ({ formValue }) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-5 py-10 shadow-lg m-5 border-t-8">
      <Image src="/logo.svg" alt="logo" width={110} height={110} />

      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        {/* meeting info */}
        <div className="p-4 border-r">
          <h1>business name</h1>
          <h2 className="font-bold text-3xl">
            {formValue?.eventName ? formValue?.eventName : "Meeting Name"}
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            <h2 className="flex gap-2">
              <Clock />
              {formValue?.duration} Min{" "}
            </h2>
            <h2 className="flex gap-2">
              <MapPin />
              {formValue?.locationType} Meeting{" "}
            </h2>
            <Link
              href={formValue?.locationUrl ? formValue?.locationUrl : "#"}
              className="text-primary"
            >
              {formValue?.locationUrl}
            </Link>
          </div>
        </div>
        {/* date and time section */}
        <div className="md:col-span-2 flex px-4">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">Select Date & Time</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border mt-5"
              disabled={(date) => date <= new Date()}
            />
          </div>
          {/* <div
            className="flex flex-col w-full overflow-auto gap-4 p-5"
            style={{ maxHeight: "400px" }}
          >
            {timeSlots?.map((time, index) => (
              <Button
                className="border-primary
                         text-primary"
                variant="outline"
              >
                {time}
              </Button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PreviewEvent;

"use client";

import Modal from "@/components/my-components/Modal";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import {
  AlertCircleIcon,
  AlertTriangle,
  Biohazard,
  Camera,
  Frown,
  ShieldAlert,
  Users,
} from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [zoneID, setZoneID] = useState("0");
  return (
    <div className="mt-8 mx-80 text-white">
      <div className="grid grid-cols-3 gap-x-10 gap-y-8">
        <Card className="shadow-xl flex justify-between py-5 px-4 h-28 font-bold bg-gradient-to-br from-green-600 to-teal-800 text-gray-200 border border-gray-800">
          <p className="text-gray-300 text-xl self-end">
            <span className="text-5xl text-white">8</span>/14
          </p>{" "}
          <div className="flex flex-col justify-between pr-1">
            <Camera className="text-gray-300 opacity-60 w-6 h-8 self-end" />
            <p className="text-gray-300 self-end opacity-60 text-sm">
              Cameras active
            </p>
          </div>
        </Card>
        <Card className="shadow-xl flex justify-between py-5 px-4 h-28 font-bold bg-gradient-to-br from-rose-600 to-red-800 text-gray-200 border border-gray-800">
          <p className="text-gray-300 text-sm self-end">
            <span className="text-5xl text-white">6</span> Incidents
          </p>
          <div className="flex flex-col justify-between pr-1">
            <AlertCircleIcon className="text-gray-300 opacity-60 w-6 h-8 self-end" />
            <p className="text-gray-300 self-end opacity-60 text-sm">
              Alerts today
            </p>
          </div>
        </Card>
        <Card className="shadow-xl flex justify-between py-5 px-4 h-28 font-bold bg-gradient-to-br from-cyan-600 to-blue-800 text-gray-200 border border-gray-800">
          <p className="text-gray-300 text-xl self-end">
            <span className="text-5xl text-white">32,150</span>
          </p>
          <div className="flex flex-col justify-between pr-1">
            <Users className="text-gray-300 opacity-60 w-6 h-8 self-end" />
            <p className="text-gray-300 self-end opacity-60 text-sm">
              Atendees today
            </p>
          </div>
        </Card>
        <Card className="shadow-xl flex justify-between py-5 px-4 h-28 font-bold bg-gradient-to-br from-yellow-600 to-amber-800 text-gray-200 border border-gray-800">
          <p className="text-gray-300 text-xl self-end">
            <span className="text-5xl text-white">13</span>%
          </p>
          <div className="flex flex-col justify-between pr-1">
            <AlertTriangle className="text-gray-300 opacity-60 w-6 h-8 self-end" />
            <p className="text-gray-300 self-end opacity-60 text-sm">
              Violence probability
            </p>
          </div>
        </Card>
        <Card className="shadow-xl flex justify-between py-5 px-4 h-28 font-bold bg-gradient-to-br from-violet-600 to-indigo-800 text-gray-200 border border-gray-800">
          <p className="text-gray-300 text-sm self-end">
            <span className="text-5xl text-white">11</span> attendees
          </p>
          <div className="flex flex-col justify-between pr-1">
            <Frown className="text-gray-300 opacity-60 w-6 h-8 self-end" />
            <p className="text-gray-300 self-end opacity-60 text-sm">
              Suspicious attendees
            </p>
          </div>
        </Card>
        <Card className="shadow-xl flex justify-between py-5 px-4 h-28 font-bold bg-gradient-to-br from-pink-600 to-purple-800 text-gray-200 border border-gray-800">
          <p className="text-gray-300 self-end">
            <span className="text-5xl text-white self-end">Zone 11</span>
          </p>
          <div className="flex flex-col justify-between pr-1">
            <ShieldAlert className="text-gray-300 opacity-60 w-6 h-8 self-end" />
            <p className="text-gray-300 self-end opacity-60 text-sm">
              Highest risk zone
            </p>
          </div>
        </Card>
      </div>
      {/* <Modal zoneID={zoneID} isHidden={isHidden} /> */}
      <div className="mt-16 grid grid-cols-4 gap-4">
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setIsHidden(false);
            setZoneID("1");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/1-fans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setIsHidden(false);
            setZoneID("2");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/2-fans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setIsHidden(false);
            setZoneID("3");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/11-fans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setIsHidden(false);
            setZoneID("4");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/4-fans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setIsHidden(false);
            setZoneID("5");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/5-fans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setIsHidden(false);
            setZoneID("6");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/6-fans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out border border-solid blinking-border"
          width="320"
          height="240"
          onClick={() => {
            setIsHidden(false);
            setZoneID("7");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/7-fight.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setIsHidden(false);
            setZoneID("8");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/8-fans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;

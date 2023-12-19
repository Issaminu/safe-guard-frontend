"use client";

import Stadium from "@/app/home/Stadium";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Modal from "@mui/material/Modal";
import {
  AlertCircleIcon,
  AlertTriangle,
  Camera,
  Frown,
  ShieldAlert,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [zoneID, setZoneID] = useState("1");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-8 mx-80 text-white" id="main">
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-semibold">Statistics</h1>
        <p className="self-end text-gray-300 flex align-middle">
          <span className="h-2 w-2 self-center bg-green-500 rounded-full inline-block mr-1"></span>
          <span className="font-extrabold mr-3 ml-1">LIVE</span>
          <span className="text-xs self-center text-gray-400">
            (last updated 5 mins ago)
          </span>
        </p>
      </div>

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
        <Card className="shadow-xl flex justify-between py-5 px-4 h-28 font-bold bg-gradient-to-br from-violet-500 to-indigo-800 text-gray-200 border border-gray-800">
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
        <Card className="shadow-xl flex justify-between py-5 px-4 h-28 font-bold bg-gradient-to-br from-pink-500 to-pink-800 text-gray-200 border border-gray-800">
          <p className="text-gray-300 self-end">
            <span className="text-5xl text-white self-end">Zone 7</span>
          </p>
          <div className="flex flex-col justify-between pr-1">
            <ShieldAlert className="text-gray-300 opacity-60 w-6 h-8 self-end" />
            <p className="text-gray-300 self-end opacity-60 text-sm">
              Highest risk zone
            </p>
          </div>
        </Card>
      </div>
      <h1 className="text-4xl mb-6 font-semibold mt-6">Cameras</h1>
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <Card className="my-12 mx-12 w-fit border-gray-800 flex flex-col-reverse">
          <div className="absolute text-white">
            <h1 className="text-5xl font-semibold text-white">Zone {zoneID}</h1>
            <h1 className="text-3xl font-semibold text-white">
              7,940 <span className="text-2xl text-white">Fans</span>
            </h1>
            <h1 className="text-3xl font-semibold">
              14%{" "}
              <span className="text-2xl text-white">
                Probability of Violence
              </span>
            </h1>
            <h1 className="text-3xl font-semibold">
              15 <span className="text-2xl text-white">Risk individuals</span>
            </h1>
          </div>
          <video
            src={"/" + zoneID + "-fans.mp4"}
            autoPlay={true}
            loop={true}
            className="rounded-md"
            muted
          ></video>
        </Card>
      </Modal>
      <div className="mt-6 grid grid-cols-4 gap-4">
        <div className="flex flex-col-reverse">
          <h1 className="absolute ">zone 1</h1>
          <video
            className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
            width="320"
            height="240"
            onClick={() => {
              setShowModal(true);
              setZoneID("1");
            }}
            autoPlay={true}
            loop={true}
            muted
          >
            <source src="/1-fans.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setShowModal(true);
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
            setShowModal(true);
            setZoneID("3");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/3-fans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setShowModal(true);
            setZoneID("4");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/10-fans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setShowModal(true);
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
            setShowModal(true);
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
            setShowModal(true);
            setZoneID("7");
          }}
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="/7-fans.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="rounded-md hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out"
          width="320"
          height="240"
          onClick={() => {
            setShowModal(true);
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

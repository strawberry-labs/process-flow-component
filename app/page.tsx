"use client"; // 👈 use it here

import { useState, useEffect } from "react";
import { IconContext } from "react-icons";

import Image from "next/image";

import {
  FaHandshake,
  FaCalculator,
  FaFileContract,
  FaPenRuler,
  FaFileSignature,
  FaHammer,
  FaClipboardCheck,
  FaHouseCircleCheck,
} from "react-icons/fa6";

import {
  PiNumberCircleOne,
  PiNumberCircleTwo,
  PiNumberCircleThree,
  PiNumberCircleFour,
  PiNumberCircleFive,
  PiNumberCircleSix,
  PiNumberCircleSeven,
  PiNumberCircleEight,
  PiNumberCircleNine,
  PiCheckCircle,
} from "react-icons/pi";

import { MdOutlineHandshake } from "react-icons/md";
import { FaHardHat, FaHeadset } from "react-icons/fa";

export default function Home() {
  const [selectedStep, setSelectedStep] = useState(1);
  const [stepDetail, setStepDetail] = useState("INITIAL CONSULTATION");
  const [animationClass, setAnimationClass] = useState(true);
  const [opacityCheck, setOpacityCheck] = useState(false);

  useEffect(() => {
    setAnimationClass(false);
    setAnimationClass(true);
    void document.documentElement.offsetWidth;
    setTimeout(() => {
      setOpacityCheck(true);
    }, 1200);
  }, [selectedStep]);

  const stepStyles = [
    { transform: "rotate(0deg) translateY(-400%) rotate(0deg)" },
    { transform: "rotate(36deg) translateY(-400%) rotate(-36deg)" },
    { transform: "rotate(72deg) translateY(-400%) rotate(-72deg)" },
    { transform: "rotate(108deg) translateY(-400%) rotate(-108deg)" },
    { transform: "rotate(144deg) translateY(-400%) rotate(-144deg)" },
    { transform: "rotate(180deg) translateY(-400%) rotate(-180deg)" },
    { transform: "rotate(216deg) translateY(-400%) rotate(-216deg)" },
    { transform: "rotate(252deg) translateY(-400%) rotate(-252deg)" },
    { transform: "rotate(288deg) translateY(-400%) rotate(-288deg)" },
    { transform: "rotate(324deg) translateY(-400%) rotate(-324deg)" },
  ];
  const detailsArray = [
    "INITIAL CONSULTATION",
    "ASSESSMENT & ESTIMATION",
    "PROPOSAL & CONTRACT",
    "DESIGN PHASE",
    "PERMITS & APPROVALS",
    "SITE PREPARTION",
    "RENOVATION WORK",
    "QUALITY CONTROL",
    "COMPLETION & HANDOVER",
    "POST-RENOVATION SUPPORT",
  ];

  const imageArray = [
    "/handshake.png",
    "/coins.png",
    "/contract.png",
    "/sketch.png",
    "/approved.png",
    "/labour-day.png",
    "/home-repair.png",
    "/quality-assurance.png",
    "/key.png",
    "/support.png",
  ];
  let iconStyles = { color: "white", fontSize: "2em" };

  const iconsArray = [
    <MdOutlineHandshake key="handshake" />,
    <FaCalculator key="handshake" />,
    <FaFileContract key="fileContract" />,
    <FaPenRuler key="penRuler" />,
    <FaFileSignature key="fileSignature" />,
    <FaHardHat key="hardHat" />,
    <FaHammer key="hammer" />,
    <FaClipboardCheck key="clipboardCheck" />,
    <FaHouseCircleCheck key="houseCircleCheck" />,
    <FaHeadset key="headset" />,
  ];

  const numberArray = [
    <PiNumberCircleOne key="1" />,
    <PiNumberCircleTwo key="2" />,
    <PiNumberCircleThree key="3" />,
    <PiNumberCircleFour key="4" />,
    <PiNumberCircleFive key="5" />,
    <PiNumberCircleSix key="6" />,
    <PiNumberCircleSeven key="7" />,
    <PiNumberCircleEight key="8" />,
    <PiNumberCircleNine key="9" />,
    <PiCheckCircle key="10" />,
  ];

  const handleSelection = (index: string) => {
    if (parseInt(index) != selectedStep) {
      setOpacityCheck(false);
    }
    setAnimationClass(false);
    setSelectedStep(parseInt(index));
    setStepDetail(detailsArray[parseInt(index) - 1]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 bg-white">
      <div className="relative flex h-screen w-screen items-center justify-center bg-white">
        {/* Main circle that shows details */}
        <div className="z-10 absolute flex flex-col h-64 w-64 md:h-[25rem] md:w-[25rem] drop-shadow-xl items-center place-content-center justify-center text-sm md:text-xl font-medium text-center text-white	rounded-full bg-gradient-to-r from-[#895b35] to-[#f1bf87] p-8">
          <IconContext.Provider
            value={{
              color: "white",
              className: "text-3xl md:text-4xl mb-2 md:mb-4 -mt-14 md:-mt-20 ",
            }}
          >
            <div className={`${animationClass && "animate-fadeIn"}`}>
              {numberArray[selectedStep - 1]}
            </div>
          </IconContext.Provider>
          <div className="absolute inset-x-0 bottom-1/2 transform translate-y-1/2">
            <span
              className={`text-white text-base md:text-2xl font-medium text-center p-2 ${
                opacityCheck ? "opacity-100" : "opacity-0"
              } ${animationClass && "animate-fadeIn"}`}
            >
              {stepDetail}
            </span>
          </div>
        </div>
        {/* Process steps */}
        {stepStyles.map((style, index) => (
          <div key={index} style={style} className="absolute">
            <div
              onClick={(e) =>
                handleSelection(e.currentTarget.getAttribute("data-id") || "1")
              }
              onMouseEnter={(e) =>
                handleSelection(e.currentTarget.getAttribute("data-id") || "1")
              }
              data-id={index + 1}
              className={`flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-full text-center border border-gray-400 drop-shadow-lg ${
                selectedStep == index + 1 ? "bg-[#323644]" : "bg-[#B9895B]"
              }`}
            >
              <Image
                src={imageArray[index]}
                width={50}
                height={50}
                className="w-6 h-6 md:w-9 md:h-9"
                alt="Picture of the author"
              />
            </div>
          </div>
        ))}
        <div className="-z-100 w-80 h-80 md:w-[32rem] md:h-[32rem] border border-gray-400 rounded-full"></div>
      </div>
    </main>
  );
}

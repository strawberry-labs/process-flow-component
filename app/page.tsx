"use client"; // 👈 use it here

import { useState } from "react";
import { IconContext } from "react-icons";

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
import { FaHardHat, FaHeadset } from "react-icons/fa";

export default function Home() {
  const [selectedStep, setSelectedStep] = useState(1);
  const [stepDetail, setStepDetail] = useState("INITIAL CONSULTATION");
  const stepStyles = [
    { transform: "rotate(0deg) translateY(-250%) rotate(0deg)" },
    { transform: "rotate(36deg) translateY(-250%) rotate(-36deg)" },
    { transform: "rotate(72deg) translateY(-250%) rotate(-72deg)" },
    { transform: "rotate(108deg) translateY(-250%) rotate(-108deg)" },
    { transform: "rotate(144deg) translateY(-250%) rotate(-144deg)" },
    { transform: "rotate(180deg) translateY(-250%) rotate(-180deg)" },
    { transform: "rotate(216deg) translateY(-250%) rotate(-216deg)" },
    { transform: "rotate(252deg) translateY(-250%) rotate(-252deg)" },
    { transform: "rotate(288deg) translateY(-250%) rotate(-288deg)" },
    { transform: "rotate(324deg) translateY(-250%) rotate(-324deg)" },
  ];
  const detailsArray = [
    "INITIAL CONSULTATION",
    "PROJECT ASSESSMENT AND ESTIMATION",
    "PROPOSAL AND CONTRACT",
    "DESIGN PHASE",
    "PERMITS AND APPROVALS",
    "SITE PREPARTION",
    "RENOVATION WORK",
    "QUALITY CONTROL",
    "COMPLETION AND HANDOVER",
    "POST-RENOVATION SUPPORT",
  ];
  let iconStyles = { color: "white", fontSize: "2em" };

  const iconsArray = [
    <FaHandshake key="handshake" />,
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

  const handleSelection = (index: string) => {
    setSelectedStep(parseInt(index));
    setStepDetail(detailsArray[parseInt(index) - 1]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="relative flex h-screen w-screen items-center justify-center">
        {/* Main circle that shows details */}
        <div className="z-10 flex flex-col h-36 w-36 md:h-52 md:w-52 xl:h-64 xl:w-64 items-center place-content-center justify-center text-sm md:text-xl font-medium text-center text-white	rounded-full bg-blue-500 p-8">
          <IconContext.Provider
            value={{
              color: "white",
              className: "text-lg md:text-2xl mb-4",
            }}
          >
            <div>{iconsArray[selectedStep - 1]}</div>
          </IconContext.Provider>
          {stepDetail}
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
              className={`flex h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20 items-center justify-center rounded-full text-center ${
                selectedStep == index + 1 ? "bg-red-500" : "bg-gray-700"
              }`}
            >
              <IconContext.Provider
                value={{ color: "white", className: "text-lg md:text-2xl" }}
              >
                <div>{iconsArray[index]}</div>
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

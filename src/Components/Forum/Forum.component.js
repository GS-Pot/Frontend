import React from "react";
import Navbar from "../Home/Navbar";
import rply from "../../Assets/rply.svg";

function Forumcomponent() {
  return (
    <div>
      <Navbar />

      <div className="bg-[#57AC49] h-[100vh] w-[100vw] flex flex-col justify-center align-center m-2">
        <h1 className="text-4xl font-bold font-ss text-white justify-start">
          GrowIndia Forum
        </h1>
        <p className="text-2xl font-[400] font-ss text-white justify-start">
          Join the Community of Farming Innovators: Share Ideas, Knowledge, and
          Experiences
        </p>
        <imput
          type="text"
          placeholder="Search Forum"
          className="w-[60vw] bg-white"
        />
        <button>Search</button>
      </div>
      <div className="bg-white h-[100vh] w-[100vw] flex flex-row justify-center align-center">
        <div className="h-[100vh] w-[30vw] flex flex-col justify-center align-center">
          <h1 className="text-4xl font-bold font-ss text-white bg-[#57AC49] justify-start rounded-xl">
            Start discussing
          </h1>
          <div className="h-[80vh] w-[30vw] flex flex-col justify-center align-center border-black-1 border-b-2">
            <h3 className="text-2xl font-bold font-ss text-[#57AC49] justify-start">
              Discussion Filter
            </h3>
            <div>
              <ul className="flex flex-col justify-center align-center">
                <li>All Discussion</li>
                <li>My Questions</li>
                <li>My Participation</li>
                <li>My answer</li>
              </ul>
              <hr className="border-[#0000005c] w-[20vw]" />
              <ul className="flex flex-col justify-center align-center">
                <li>Finished Discussion</li>
                <li>Unfinished Discussion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[100vh] w-[70vw] flex flex-col justify-center align-center">
          <div classname="flex flex-col justify-start align-start ">
            <h1 className="text-4xl font-bold font-ss text-black justify-start py-2 text-left">
              WINTER IS SHOW SEASON: Farm shows, conferences are back
            </h1>
            <p className="text-2xl font-[400] font-ss text-black justify-start text-left py-2">
              EASTERN ONTARIO — February and March are a traditional time for
              farmers to get out, get together and check out the latest
              technology and information at a variety of winter shows and
              conferences. And after the upheaval of the recent pandemic era,
              the 2023 schedule has returned somewhat to normal, though there
              are notable absences. Where there was once no less than 11
              in-person farm shows, stretching from New York to Cornwall over a
              five-week period, that’s now down to seven. The cancelled events
              include the Cornwall Eco Farm Days, Eastern Ontario Days and
              Quinte Farm Trade Show.
            </p>
            <img src={rply} alt="reply" classname="py-6 hover:cursor-pointer" />
          </div>
          <div classname="flex flex-col justify-start align-start ">
            <h1 className="text-4xl font-bold font-ss text-black justify-start py-2 text-left">
              WINTER IS SHOW SEASON: Farm shows, conferences are back
            </h1>
            <p className="text-2xl font-[400] font-ss text-black justify-start text-left py-2">
              EASTERN ONTARIO — February and March are a traditional time for
              farmers to get out, get together and check out the latest
              technology and information at a variety of winter shows and
              conferences. And after the upheaval of the recent pandemic era,
              the 2023 schedule has returned somewhat to normal, though there
              are notable absences. Where there was once no less than 11
              in-person farm shows, stretching from New York to Cornwall over a
              five-week period, that’s now down to seven. The cancelled events
              include the Cornwall Eco Farm Days, Eastern Ontario Days and
              Quinte Farm Trade Show.
            </p>
            <img src={rply} alt="reply" classname="py-6 hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forumcomponent;

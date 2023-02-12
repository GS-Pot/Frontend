import React from "react";
import Navbar from "../Home/Navbar";
import leaf from "../../Assets/phoolpatti.svg";
const Single = ({ data }) => {
  const a = {
    title: "WINTER IS SHOW SEASON: Farm shows, conferences are back",
    body: "EASTERN ONTARIO — February and March are a traditional time for farmers to get out, get together and check out the latest technology and information at a variety of winter shows and conferences. And after the upheaval of the recent pandemic era, the 2023 schedule has returned somewhat to normal, though there are notable absences. Where there was once no less than 11 in-person farm shows, stretching from New York to Cornwall over a five-week period, that’s now down to seven. The cancelled events include the Cornwall Eco Farm Days, Eastern Ontario Days and Quinte Farm Trade Show.",
    userId: "rishit@gmail.com",
    role: "admin",
    created: "2021-10-10T12:00:00.000Z",
  };
  return (
    <div
      className="w-full h-[100vh]"
      style={{
        background: `url(${leaf}),#00220040`,
      }}
    >
      <div className="bg-[#6caa4f] rounded-xl w-full">
        <Navbar />
      </div>
      <div className="pt-24 flex flex-col">
        <div className="text-[#6caa4f] font-[800] text-xl font-ss">
          Discussion
        </div>
        <div className="font-bold text-3xl w-[80%] mx-auto">{a.title}</div>
      </div>
    </div>
  );
};

export default Single;

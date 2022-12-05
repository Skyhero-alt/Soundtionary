import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import AnswerBox from "./AnswerBox";
import React from "react";

const GameRoom = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-row h-5/6">
        <Leaderboard />
        <AnswerBox />
      </div>
    </div>
  );
};

export default GameRoom;

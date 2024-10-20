"use client";
import RewradsCard from "@/components/RewradsCard";
import React from "react";

const Rewards = () => {
  return (
    <div className="text-white p-4 flex flex-col">
      <h1 className="text-5xl font-bold text-purple-500">Rewards</h1>

      <RewradsCard walletaddr="jbhqdjjkkjsbqll" total={200} />
    </div>
  );
};

export default Rewards;

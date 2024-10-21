"use client";
import RewardsCard from "@/components/RewardsCard";
import React from "react";

const Rewards = () => {
  return (
    <div className="text-white p-4 flex flex-col">
      <h1 className="text-5xl font-bold text-green-500">Rewards</h1>

      <RewardsCard walletaddr="jbhqdjjkkjsbqll" total={200} />
    </div>
  );
};

export default Rewards;

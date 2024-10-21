import MintNFTCard from "@/components/MintNFTCard";
import React from "react";

const Mint = () => {
  return (
    <div className="text-white p-4 flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-green-500 font-mono">
        Mint NFT
      </h1>
      <div className="flex justify-center items-center h-[80vh]">
        <MintNFTCard img="/logo.svg" />
      </div>
    </div>
  );
};

export default Mint;

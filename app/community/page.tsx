import NftCard from "@/components/NftCard";
import Timer24Hours from "@/components/Timer";
import TotalVotes from "@/components/TotalVotes";
import { ChevronDown, Timer } from "lucide-react";
import React from "react";

const Community = () => {
  return (
    <div className="text-white p-4 flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-green-500">Community</h1>
      <div className="flex justify-between">
        <button className="text-white bg-gray-800 rounded-xl px-6 py-2 font-medium flex items-center">
          Filter <ChevronDown className="ml-2 w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Timer />
          <Timer24Hours />
        </div>
        <TotalVotes votes={2000} />
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <NftCard name="Hello" img="/logo.svg" addr="hkWJBVEKAWLBKEWJk" />
        <NftCard name="Hello" img="/logo.svg" addr="hkWJBVEKAWLBKEWJk" />
        <NftCard name="Hello" img="/logo.svg" addr="hkWJBVEKAWLBKEWJk" />
      </div>
    </div>
  );
};

export default Community;

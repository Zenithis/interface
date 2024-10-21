import React from "react";

const RewardsCard = ({
  walletaddr,
  total,
}: {
  walletaddr: string;
  total: number;
}) => {
  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <div className="flex flex-col gap-3 justify-center px-6 py-6 box-background bg-[#4444444d]/10">
        <p className="font-semibold">
          Wallet Address :{" "}
          <span className="text-purple-400 text-lg font-semibold">
            {walletaddr}
          </span>{" "}
        </p>

        <p className="font-semibold">
          Total Rewards :{" "}
          <span className="text-3xl font-bold text-purple-400">
            {total} pts
          </span>
        </p>
      </div>
    </div>
  );
};

export default RewardsCard;

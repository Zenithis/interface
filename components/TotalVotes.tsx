import React from "react";

const TotalVotes = ({ votes }: { votes: number }) => {
  return (
    <div>
      <p>
        Total Votes : <span className="text-xl text-pink-900 font-bold">{votes}</span>
      </p>
    </div>
  );
};

export default TotalVotes;

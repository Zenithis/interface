import Link from "next/link";
import React from "react";

const AiImage = () => {
  return (
    <div className="text-white p-4 flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-green-500 font-mono">
        AI Image Gen
      </h1>
      <div className="h-[60vh] flex justify-center">
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <input
            type="text"
            name="desc"
            id="aigen"
            placeholder="Enter Image Description..."
            className="outline-none bg-[#581c87]/10 rounded-lg w-[80%] py-2 px-4"
          />
          <Link href="/mint-nft" className="flex w-full justify-center">
            <button className="bg-green-500 text-white font-semibold py-2 rounded-lg flex justify-center items-center w-[60%]">
              Generate Image
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiImage;

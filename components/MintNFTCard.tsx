import Image from "next/image";
import Link from "next/link";
import React from "react";

const MintNFTCard = ({ img }: { img: string }) => {
  return (
    <div className="flex p-4 box-background bg-[#581c87]/10 w-[80%]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2">
          <Image
            src={img}
            width={200}
            height={200}
            alt="nft"
            className="object-cover border-b-2"
          />
        </div>
        <Link href="/community" className="flex justify-center w-full">
          <button className="bg-green-500 text-white font-semibold py-2 rounded-lg flex justify-center items-center w-[60%]">
            Mint NFT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MintNFTCard;

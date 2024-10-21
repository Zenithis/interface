import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const NftCard = ({
  name,
  img,
  addr,
}: {
  name: string;
  img: string;
  addr: string;
}) => {
  return (
    <div className="flex p-4 box-background bg-[#581c87]/10 w-[80%]">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-center text-3xl font-bold font-mono text-cyan-500">{name}</p>
          <Image src={img} width={200} height={200} alt={name} className="object-cover border-b-2" />
        </div>
        <div className="flex justify-between w-full">
          <p className="text-sm text-green-500 font-semibold font-mono">{addr}</p>
          <Heart />
        </div>
      </div>
    </div>
  );
};

export default NftCard;

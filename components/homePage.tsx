import React from "react";
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import Link from "next/link";

interface Product {
  name: string;
  categories: string[];
  description: string;
  upvotes: number;
  downvotes: number;
  comments: number;
  logoColor: string;
}

const products: Product[] = [
  {
    name: "Dolt",
    categories: ["Bridges", "Gaming"],
    description: "Strong infrastructure bridges for Aptos ecosystem",
    upvotes: 5,
    downvotes: 33,
    comments: 24,
    logoColor: "from-purple-500 to-blue-500",
  },
  {
    name: "Cronin",
    categories: ["DAO", "NFT & digital art"],
    description:
      "A DAO based community platform for revenue sharing agreements",
    upvotes: 5,
    downvotes: 33,
    comments: 24,
    logoColor: "from-yellow-500 to-red-500",
  },
];

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* <div className="absolute inset-0 flex">
        <div className="w-1/3 bg-gradient-to-r from-[rgba(255,154,158,0.2)] via-[rgba(250,208,196,0.2)] to-[rgba(250,208,196,0.2)]"></div>
        <div className="w-1/3 bg-gradient-to-r from-[rgba(79,172,254,0.2)] to-[rgba(0,242,254,0.2)]"></div>
        <div className="w-1/3 bg-gradient-to-r from-[rgba(212,252,121,0.2)] to-[rgba(150,230,161,0.2)]"></div>
      </div> */}
      <div className="absolute inset-0 backdrop-blur-[74px]"></div>

      <div className="relative z-10 p-6 w-full mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="text-green-400">
            <img src="/logo.svg" alt="" />
          </div>
          <Link href="rewards">
            <button className="text-white bg-green-500 rounded-xl px-4 py-2 font-semibold">
              Rewards
            </button>
          </Link>
          {/* <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm">
            Connect wallet for
          </button> */}
        </div>

        <div>
          <div className="absolute inset-0 flex mt-20 h-[30%] rounded">
            <div className="absolute z-[-1] inset-0 backdrop-blur-[74px]"></div>
            <div className="w-1/3 inset-0  z-[-1] rounded backdrop-blur-[74px] bg-gradient-to-r from-[rgba(255,154,158,0.2)] via-[rgba(250,208,196,0.2)] to-[rgba(250,208,196,0.2)]"></div>
            <div className="w-1/3 rounded bg-gradient-to-r from-[rgba(79,172,254,0.2)] to-[rgba(0,242,254,0.2)]"></div>
            <div className="w-1/3 bg-gradient-to-r from-[rgba(212,252,121,0.2)] to-[rgba(150,230,161,0.2)]"></div>
          </div>
          {/* <div className="absolute inset-0 backdrop-blur-[74px]"></div> */}
          <h1 className=" text-4xl font-semibold mb-2 p-4 text-center">
            Maybe the real DApps were friends we made all along
          </h1>
          <p className="text-gray-400 mb-6 text-center">
            Hottest Web3 product directory you cant afford to miss
          </p>
        </div>

        <div className="box-background bg-[#4444444d]/10 text-white p-4 rounded-3xl max-w-md mx-auto">
          <div className="flex justify-between items-center w-full gap-4 mb-6">
            {/* <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center text-sm">
              All chains <ChevronDown className="ml-2 w-4 h-4" />
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center text-sm">
              Categories <ChevronDown className="ml-2 w-4 h-4" />
            </button> */}
            <Link href="/ai" className="w-[50%]">
              <button className="bg-green-500 text-white font-semibold py-2 rounded-lg flex justify-center items-center w-full">
                AI Gen
              </button>
            </Link>

            <Link href="/community" className="w-[50%]">
              <button className="bg-green-500 text-white font-semibold py-2 rounded-lg flex justify-center items-center w-full">
                Community
              </button>
            </Link>
          </div>

          <h2 className="text-xl font-semibold mb-4">
            Hottest products today 🔥
          </h2>

          {products.map((product, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 mb-4">
              <div className="flex items-center mb-2">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${product.logoColor} rounded-full mr-3`}
                ></div>
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex space-x-2">
                    {product.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor:
                            catIndex === 0 ? "#6b46c1" : "#10b981",
                          color: "white",
                        }}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                {product.description}
              </p>
              <div className="flex space-x-4 text-xs text-gray-400">
                <span className="flex items-center">
                  <ThumbsUp className="w-3 h-3 mr-1" /> {product.upvotes} Upvote
                </span>
                <span className="flex items-center">
                  <ThumbsDown className="w-3 h-3 mr-1" /> {product.downvotes}{" "}
                  Downvotes
                </span>
                <span className="flex items-center">
                  <MessageSquare className="w-3 h-3 mr-1" /> {product.comments}{" "}
                  comments
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

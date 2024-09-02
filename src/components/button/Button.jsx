import React from "react";
import { useContext } from "react";
import Web3Context from "../../context/Web3Context";

const Button = () => {
  const { handleWallet } = useContext(Web3Context);
  return (
    <button
      onClick={handleWallet}
      className="relative inline-flex flex-wrap items-center justify-center  p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white"
    >
      <span className="relative px-10 py-1 dark:bg-gray-900/90 rounded-md text-sm">
        Connect To Wallet
      </span>
    </button>
  );
};

export default Button;

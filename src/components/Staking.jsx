import React, { useState } from "react";
import { motion } from "framer-motion";
import TokenApproval from "./token/TokenApproval";
import StakeAmount from "./token/StakeAmount";
import StakedAmount from "./displaypanel/StakedAmount";
import EarnedReward from "./displaypanel/EarnedReward";
import RewardRate from "./displaypanel/RewardRate";
import Withdraw from "./token/Withdraw";
import ClaimReward from "./claimreward/ClaimReward";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Staking = () => {
  const [displaySection, setDisplaySection] = useState("stake");
  const className1 =
    "relative inline-flex flex-wrap items-center justify-center  p-0.5 ml-1 mr-1   text-sm font-medium rounded-t-lg bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white";
  const className2 =
    "relative inline-flex flex-wrap items-center justify-center  p-0.5 ml-1 mr-1   text-sm font-medium rounded-t-lg ";
  const [className, setClassName] = useState("stake");
  const Renderscreen = () => {
    if (className == "stake") {
      return (
        <div>
          <TokenApproval />
          <StakeAmount />
        </div>
      );
    } else if (className == "withdraw") {
      return <Withdraw />;
    } else {
      return <ClaimReward />;
    }
  };
  const handleButtonClick = (section) => {
    setDisplaySection(section);
    setClassName(section);
    Renderscreen(section);
  };

  return (
    <div className="absolute m-auto left-0 right-0 flex-wrap items-center justify-center pointer-events-none ">
      <div className="flex-wrap h-auto w-auto py-5 rounded-2xl bg-gray-900/80 max-w-sm mx-auto mb-8 ">
        <StakedAmount />
        <RewardRate />
        <EarnedReward />
      </div>
      <div class="max-w-sm mx-auto ">
        <div className="flex flex-wrap pointer-events-auto">
          <button
            onClick={() => handleButtonClick("stake")}
            className={className == "stake" ? className1 : className2}
          >
            <span className="relative px-10 py-1 mb-[-2%] dark:bg-gray-900 rounded-t-lg  text-sm">
              Stake
            </span>
          </button>

          <button
            onClick={() => handleButtonClick("withdraw")}
            className={className == "withdraw" ? className1 : className2}
          >
            <span className="relative px-6 py-1 mb-[-2%] dark:bg-gray-900 rounded-t-lg  text-sm">
              Withdraw
            </span>
          </button>

          <button
            onClick={() => handleButtonClick("claim")}
            className={className == "claim" ? className1 : className2}
          >
            <span className="relative px-10 py-1 mb-[-2%] dark:bg-gray-900 rounded-t-lg  text-sm">
              Claim
            </span>
          </button>
        </div>
        <div class=" py-2 px-2 rounded-b-2xl bg-gray-900/40 mb-2">
          <form className="pointer-events-auto">
            <Renderscreen />
            {/* {displaySection === "stake" ? (
              <div>
                <TokenApproval />
                <StakeAmount />
              </div>
            ) : (
              <Withdraw />
            )} */}
          </form>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Staking;

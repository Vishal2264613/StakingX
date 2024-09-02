import { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";
import web3Context from "../../context/Web3Context";
import { toast } from "react-hot-toast";

const EarnedReward = () => {
  const { state } = useContext(web3Context);
  const [rewardVal, setRewardVal] = useState("0");

  useEffect(() => {
    const fetchStakeRewardInfo = async () => {
      try {
        //fetching earned amount of a user
        const rewardValueWei = await state.stakingContract.earned(
          state.selectedAccount
        );
        const rewardValueEth = ethers
          .formatUnits(rewardValueWei, 18)
          .toString();
        const roundedReward = parseFloat(rewardValueEth).toFixed(2);
        setRewardVal(roundedReward);
      } catch (error) {
        toast.error("Error fetching the reward:");
        console.error(error.message);
      }
    };
    const interval = setInterval(() => {
      state.stakingContract && fetchStakeRewardInfo();
    }, 20000);
    return () => clearInterval(interval);
  }, [state.stakingContract, state.selectedAccount]);

  return (
    <div className="flex flex-wrap justify-between px-4">
      <p>Earned Reward:</p>
      <p>{rewardVal}</p>
    </div>
  );
};
export default EarnedReward;

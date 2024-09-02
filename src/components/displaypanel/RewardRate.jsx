import { useState, useEffect, useContext } from "react";
import Web3Context from "../../context/Web3Context";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";

const RewardRate = () => {
  const { state } = useContext(Web3Context);
  const [rewardRate, setRewardRate] = useState("0");

  useEffect(() => {
    const fetchRewardRate = async () => {
      try {
        const rewardRateWei = await state.stakingContract.REWARD_RATE();
        const rewardRateEth = ethers.formatUnits(rewardRateWei.toString(), 18);
        setRewardRate(rewardRateEth);
      } catch (error) {
        toast.error("Error fetching reward rate");
        console.error(error.message);
      }
    };
    state.stakingContract && fetchRewardRate();
  }, [state.stakingContract, state.selectedAccount]);

  return (
    <div className="flex flex-wrap justify-between px-4">
      <p>Reward Rate:</p>
      <p>{rewardRate} token/sec</p>
    </div>
  );
};
export default RewardRate;

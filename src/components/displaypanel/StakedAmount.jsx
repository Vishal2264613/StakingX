import { useState, useEffect, useContext } from "react";
import Web3Context from "../../context/Web3Context";
import StakingContext from "../../context/StakingContext";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";

const StakedAmount = () => {
  const { state } = useContext(Web3Context);
  const { isReload } = useContext(StakingContext);
  const [stakedAmount, setStakedAmount] = useState("0");

  useEffect(() => {
    const fetchStakedBalance = async () => {
      try {
        const amountStakedWei = await state.stakingContract.stakedBalance(
          state.selectedAccount
        );
        const amountStakedEth = ethers.formatUnits(
          amountStakedWei.toString(),
          18
        );
        setStakedAmount(amountStakedEth);
      } catch (error) {
        toast.error("Error fetching staked amount");
        console.error(error.message);
      }
    };
    state.stakingContract && fetchStakedBalance();
  }, [state.stakingContract, state.selectedAccount, isReload]);

  return (
    <div className="flex flex-wrap justify-between px-4">
      <p> Staked Amount</p>
      <p>{stakedAmount}</p>
    </div>
  );
};
export default StakedAmount;

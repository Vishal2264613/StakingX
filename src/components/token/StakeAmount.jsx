import { useContext, useRef } from "react";
import { ethers } from "ethers";
import Web3Context from "../../context/Web3Context";
import StakingContext from "../../context/StakingContext";
import { toast } from "react-hot-toast";
const StakeAmount = () => {
  const { state } = useContext(Web3Context);
  const { isReload, setIsReload } = useContext(StakingContext);
  const stakeAmountRef = useRef();

  const stakeToken = async (e) => {
    e.preventDefault();

    const amount = stakeAmountRef.current.value.trim();

    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid positive number.");
      return;
    }
    const amountToStake = ethers.parseUnits(amount, 18).toString();
    try {
      const transaction = await state.stakingContract.stake(amountToStake);
      await toast.promise(transaction.wait(), {
        loading: "Transaction is pending...",
        success: "Transaction successful 👌",
        error: "Transaction failed 🤯",
      });
      stakeAmountRef.current.value = "";
      setIsReload(!isReload);
      // if (receipt.status === 1) {
      //     setIsReload(!isReload);
      //     stakeAmountRef.current.value = "";
      //   } else {
      //       toast.error("Transaction failed. Please try again.")
      //   }
    } catch (error) {
      toast.error("Staking Failed");
      console.error(error.message);
    }
  };
  return (
    <div>
      <div class="mb-5 border border-gray-800/50 py-6 px-2 rounded-2xl">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
        >
          Enter Staked Amount:
        </label>
        <input
          type="text"
          ref={stakeAmountRef}
          class=" text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-gray-900/60 dark:text-white"
          placeholder="e.g. 1 or 2"
          required
        />
      </div>

      <div className=" flex flex-wrap h-auto w-100  items-center justify-center">
        <button
          onClick={stakeToken}
          type="button"
          class="text-white h-10 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm text-center "
        >
          Stake Token
        </button>
      </div>
    </div>
  );
};
export default StakeAmount;

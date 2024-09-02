import { useContext, useRef } from "react";
import { ethers } from "ethers";
import Web3Context from "../../context/Web3Context";
import { toast } from "react-hot-toast";
const TokenApproval = () => {
  //stakeTokenContract, stakingContract, selectedAccount
  const { state } = useContext(Web3Context);
  const approvedTokenRef = useRef();

  const approveToken = async (e) => {
    e.preventDefault();

    const amount = approvedTokenRef.current.value.trim();
    if (isNaN(amount) || amount <= 0) {
      console.error("Please enter a valid positive number");
      return;
    }
    const amountToSend = ethers.parseUnits(amount, 18).toString();

    try {
      const transaction = await state.stakeTokenContract.approve(
        state.stakingContract.target,
        amountToSend
      );

      await toast.promise(transaction.wait(), {
        loading: "Transaction is pending...",
        success: "Transaction successful 👌",
        error: "Transaction failed 🤯",
      });
      approvedTokenRef.current.value = "";
      // const receipt = await transaction.wait();
      // if (receipt.status === 1) {
      //     toast.success("Transaction is successful")
      //     approvedTokenRef.current.value = "";
      //   } else {
      //       toast.error("Transaction failed. Please try again.")
      //   }
    } catch (error) {
      toast.error("Token Approval Failed");
      console.error(error.message);
    }
  };
  return (
    <div>
      <div class="mb-5 border border-gray-800/50 py-6 px-2 rounded-2xl">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
        >
          Token Approval
        </label>
        <input
          type="text"
          ref={approvedTokenRef}
          class=" text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-gray-900/60 dark:text-white"
          placeholder="e.g. 1 or 2"
          required
        />
      </div>
      <div
        onClick={approveToken}
        className=" flex flex-wrap h-auto w-100  items-center justify-center"
      >
        <button
          type="button"
          class="text-white h-10 w-full mb-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm text-center"
        >
          Token Approval
        </button>
      </div>
    </div>
  );
};
export default TokenApproval;

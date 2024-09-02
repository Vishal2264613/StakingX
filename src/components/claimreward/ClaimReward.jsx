import { useContext } from "react";
import web3Context from "../../context/Web3Context";
import { toast } from "react-hot-toast";

const ClaimReward = () => {
  const { state } = useContext(web3Context);
  const claimReward = async () => {
    try {
      const transaction = await state.stakingContract.getReward();
      await toast.promise(transaction.wait(), {
        loading: "Transaction is pending...",
        success: "Transaction successful 👌",
        error: "Transaction failed 🤯",
      });
      // if(receipt.status === 1){
      //     setTransactionStatus("Transaction Is Successful")
      //     setTimeout(()=>{
      //       setTransactionStatus("")
      //     },5000)
      //   } else{
      //     setTransactionStatus("Transaction failed. Please try again.");
      //   }
    } catch (error) {
      console.error("Claim Reward Failed", error.message);
    }
  };
  return (
    <div className=" flex flex-wrap h-auto w-100 py-10  items-center justify-center">
      <button
        onClick={claimReward}
        type="button"
        class="text-white h-10 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm text-center "
      >
        Claim Reward
      </button>
    </div>
  );
};

export default ClaimReward;

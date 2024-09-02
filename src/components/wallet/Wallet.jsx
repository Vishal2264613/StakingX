import { useState, useEffect } from "react";
import { connectWallet } from "../../utils/connectWallet";
import Web3Context from "../../context/Web3Context";
import { handleAccountChange } from "../../utils/handleAccountChange";
import { handleChainChange } from "../../utils/handleChainChange";
import { toast } from "react-hot-toast";

export const WalletProvider = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    stakeTokenContract: null,
    chianId: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log(window.sessionStorage.getItem("account"));

    if (window.sessionStorage.getItem("account")) {
      handleWallet();
    }

    window.ethereum.on("accountsChanged", () => handleAccountChange(setState));
    window.ethereum.on("chainChanged", () => handleChainChange(setState));

    return () => {
      window.ethereum.removeListener("accountsChanged", () =>
        handleAccountChange(setState)
      );
      window.ethereum.removeListener("chainChanged", () =>
        handleChainChange(setState)
      );
    };
  }, []);
  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const {
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      } = await connectWallet();
      setState({
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      });
    } catch (error) {
      toast.error("Error connecting wallet");
      console.error(error.message);
    } finally {
      window.sessionStorage.setItem("account", state.selectedAccount);

      setIsLoading(false);
    }
  };
  return (
    <div>
      <Web3Context.Provider value={{ state, handleWallet }}>
        {children}
      </Web3Context.Provider>
      {isLoading}
    </div>
  );
};

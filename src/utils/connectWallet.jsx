import { ethers, Contract } from "ethers";
import stakingAbi from "../ABI/stakingAbi.json";
import stakeTokenAbi from "../ABI/stakeTokenAbi.json";
import { useEffect, useState } from "react";

export const connectWallet = async () => {
  try {
    let [signer, provider, stakingContract, stakeTokenContract, chainId] = [
      null,
      null,
      null,
      null,
      null,
    ];
    if (window.ethereum === null) {
      throw new Error("Metamsk is not installed");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    let chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    chainId = parseInt(chainIdHex, 16);

    let selectedAccount = accounts[0];
    if (!selectedAccount) {
      throw new Error("No ethereum accounts available");
    }

    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    //0xfc0d6d8342cceaaa0d9eafcf7f68c8e781eec70b
    //staking - 0x34383c9bf70ff1578319a89ad5cb948a4fe7aa40
    const stakingContractAddress = "0x34383c9bf70ff1578319a89ad5cb948a4fe7aa40";
    const stakeTokenContractAddress =
      "0x12253c61af1863ceb29f8013041225596be49b7e";

    stakingContract = new Contract(stakingContractAddress, stakingAbi, signer);
    stakeTokenContract = new Contract(
      stakeTokenContractAddress,
      stakeTokenAbi,
      signer
    );

    return {
      provider,
      selectedAccount,
      stakeTokenContract,
      stakingContract,
      chainId,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

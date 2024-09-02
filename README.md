# StakingX

StakingX is a decentralized finance (DeFi) staking application that allows users to approve tokens, stake them to earn rewards, withdraw their tokens at any time and Claim rewards. Built with a responsive design using ReactJS and Tailwind CSS, StakingX integrates blockchain functionalities for seamless token transactions and reward management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

StakingX enables users to engage in DeFi by providing a straightforward platform for staking tokens and earning rewards. Key features include:

- **Token Approval**: Users can approve their tokens for staking.
- **Staking**: Stake tokens to earn rewards over time.
- **Withdrawal**: Withdraw staked tokens at any time.
- **Claim**: Claim rewards at any time.
- **Responsive Design**: An intuitive and mobile-friendly interface built with ReactJS and Tailwind CSS.

## Features

- **Approve Tokens**: Securely approve tokens for staking.
- **Earn Rewards**: Automated reward distribution based on staked tokens.
- **Flexible Withdrawal**: Easily withdraw staked tokens at any time.
- **Responsive UI**: Built with ReactJS and styled with Tailwind CSS for a seamless user experience.
- **Blockchain Integration**: Ensures smooth token transactions and reward management.

## Installation

To set up the StakingX dApp locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Vishal2264613/StakingX
   cd StakingX
   ```

2. **Install Dependencies**

   Ensure you have Node.js and npm installed. Then, run:

   ```bash
   npm install
   ```

3. **Deploy Contracts**

   1. Copy & paste all three contracts in remix Ide And deploy them one by one(Add supply according to yourself).
   2. Approve and transfer some reward tokens already to Main stake contract address.
   3. Once you deployed the contracts add StakeContract and StakingTonkenContract ABI in ABI Folder(inside src folder in main project).
   4. Also copy the StakeContract and StakingTonkenContract deployed address in connectWallet folder(inside components folder in main project).

4. **Run the Application**

   Start the development server:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `localhost` to access the dApp.

## Usage

1. **Connect Your Wallet**

   - Click on the "Connect Wallet" button to link your Ethereum wallet (e.g., MetaMask).

2. **Approve Tokens**

   - Navigate to the token approval section.
   - Approve the tokens you wish to stake.

3. **Stake Tokens**

   - Go to the staking section.
   - Enter the amount of tokens you wish to stake and confirm the transaction.

4. **View Rewards**

   - Check the rewards dashboard to monitor your earned rewards and staking history.

5. **Withdraw Tokens**

   - Access the withdrawal section to retrieve your staked tokens at any time.

6. **Claim Rewards**

- Access the Claim reward section to retrieve your reward at any time.

import React from "react";
import Navbar from "./components/Navigation/Navbar";
import BlurIcons from "./components/BlurIcons";
import Staking from "./components/Staking";
import { WalletProvider } from "./components/wallet/Wallet";
import { StakingProvider } from "./context/StakingContext";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-200 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>

      <div class="relative z-10 h-screen w-screen ">
        <WalletProvider>
          <BlurIcons />
          <Navbar />
          <StakingProvider>
            <Staking />
          </StakingProvider>
        </WalletProvider>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default App;

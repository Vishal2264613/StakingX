import React from "react";
import DAI from "../assets/BlurIconLogo/DAI.png";
import Eth from "../assets/BlurIconLogo/Eth.png";
import Aave from "../assets/BlurIconLogo/Aave.png";
import BNB from "../assets/BlurIconLogo/BNB.png";
import Solana from "../assets/BlurIconLogo/Solana.png";
import Tether from "../assets/BlurIconLogo/Tether.png";
import USDP from "../assets/BlurIconLogo/USDP.png";

import BlurIcon from "../styles/BlurIcon";
const BlurIcons = () => {
  return (
    <div>
      <BlurIcon
        logo={Aave}
        color="border-blue-500"
        string="top-[5%] left-[2%] "
        blur="blur(2px)"
      />
      <BlurIcon
        logo={BNB}
        color="border-yellow-500"
        string="top-[40%] left-[25%]"
        blur="blur(5px)"
      />
      <BlurIcon
        logo={DAI}
        color="border-yellow-500"
        string="top-[70%] left-[3%]"
        blur="blur(2px)"
      />
      <BlurIcon
        logo={Eth}
        color="border-gray-500"
        string="top-[15%] left-[40%]"
        blur="blur(4px)"
      />
      <BlurIcon
        logo={Solana}
        color="border-purple-500"
        string="top-[8%] left-[80%]"
        blur="blur(2px)"
      />
      <BlurIcon
        logo={Tether}
        color="border-green-700"
        string="top-[50%] left-[75%]"
        blur="blur(2px)"
      />
      <BlurIcon
        logo={USDP}
        color="border-green-500"
        string="top-[70%] left-[55%]"
        blur="blur(3px)"
      />
    </div>
  );
};

export default BlurIcons;

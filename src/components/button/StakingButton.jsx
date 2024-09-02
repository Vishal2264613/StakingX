import React, { useState } from "react";

const StakingButton = ({ value, setDisplaySection }) => {
  const className1 =
    "relative inline-flex flex-wrap items-center justify-center  p-0.5 mr-2 text-sm font-medium rounded-t-lg bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white";
  const className2 =
    "relative inline-flex flex-wrap items-center justify-center  p-0.5 mr-2 text-sm font-medium rounded-t-lg ";
  const [className, setClassName] = useState(className1);
  const handleButtonClick = (section) => {
    console.log(section);
    setDisplaySection(section);
  };
  return (
    <button onClick={() => handleButtonClick(value)} className={className}>
      <span className="relative px-10 py-1 mb-[-2%] dark:bg-gray-900 rounded-t-lg  text-sm">
        {value}
      </span>
    </button>
  );
};

export default StakingButton;

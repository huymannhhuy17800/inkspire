import React from "react";

const ThemeIcon = () => {
  return (
    <div
      className={`w-[24px] h-[24px] m-[4px] rounded-[50%] bg-[linear-gradient(to_right,var(--background-color)_50%,_var(--primary-text-color)_50%)] border-[3px] border-[solid] border-[var(--primary-text-color)]`}
    ></div>
  );
};

export default ThemeIcon;

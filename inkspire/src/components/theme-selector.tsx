import React, { useState, useRef, useEffect } from "react";
import ThemeIcon from "./theme-icon";
import { themeData } from "../config/intro.ts";

interface IProps {
  handleChange: any;
}
const ThemeSelector: React.FC<IProps> = ({ handleChange }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  // Theme //
  const handleThemeClick = (event: any) => {
    const selectedTheme = event.currentTarget.className;
    handleChange(selectedTheme);
    console.log("Selected: " + selectedTheme + " theme");
    setOpen(!open);
  };

  // Theme //
  // Handle click outside to close box //
  const boxRef = useRef<any>(null);
  const buttonRef = useRef<any>(null);
  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const clickedOutsideDropdown =
        boxRef.current && !boxRef.current.contains(event.target);
      const clickedOutsideButton =
        buttonRef.current && !buttonRef.current.contains(event.target);
      if (clickedOutsideDropdown && clickedOutsideButton) {
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  //Clean-up
  // Handle click outside to close box //

  // Memorize the dropdown

  //   const ThemeDropdown = React.memo(({ handleThemeClick }) => {
  //     return (
  //       <div
  //         ref={boxRef}
  //         className={open ? "open-theme-selector" : "closed-theme-selector"}
  //       >
  //         <ul>
  //           {themeData.map((key: any, data: any) => {
  //             return (
  //               <li
  //                 key={data.id}
  //                 className={data.className}
  //                 onClick={handleThemeClick}
  //               >
  //                 {data.text}
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     );
  //   });

  return (
    <div className="">
      <button
        className="cursor-pointer border-[none] rounded-[2px] p-[4px] relative"
        onClick={handleClick}
        ref={buttonRef}
      >
        <ThemeIcon />
        {open && (
          <span
            ref={boxRef}
            className={
              open
                ? "bg-[var(--surface-color)] w-[100px] flex flex-col rounded-[4px] p-[5px] absolute z-10"
                : "hidden"
            }
          >
            <ul>
              {themeData.map((data: any) => {
                return (
                  <li
                    key={data.id}
                    className={data.className}
                    onClick={handleThemeClick}
                  >
                    {data.text}
                  </li>
                );
              })}
            </ul>
          </span>
        )}
      </button>
    </div>
  );
};

export default ThemeSelector;

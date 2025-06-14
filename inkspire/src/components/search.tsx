import React from "react";

const Search = () => {
  return (
    <div className="bg-gray-100 p-2 rounded-full flex gap-2">
      <div className="">🔍</div>
      <input
        type="text"
        placeholder="Search a post ...."
        className="bg-transparent outline-none border-none"
      />
    </div>
  );
};

export default Search;

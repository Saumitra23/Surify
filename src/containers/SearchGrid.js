import React, { forwardRef } from "react";

const SearchGrid = forwardRef((props, ref) => {
  console.log("ref is ", ref);
  return (
    <div>
      <input
        className="w-96 h-12 p-2 m-2 rounded-2xl border-2 focus:border-black focus:outline-none"
        placeholder="let's listen to?"
        ref={ref}
      />
    </div>
  );
});

export default SearchGrid;

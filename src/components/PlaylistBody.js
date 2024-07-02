import React from "react";

const PlaylistBody = () => {
  const data = Array(50).fill(1);
  return (
    <div className="bg-gradient-to-b from-gray-200/10 via-gray-500 to-gray-800 shadow-[5px_-5px_20px_-5px_black] overflow-scroll text-center">
      {data.map((val) => (
        <div>{val}</div>
      ))}
    </div>
  );
};

export default PlaylistBody;

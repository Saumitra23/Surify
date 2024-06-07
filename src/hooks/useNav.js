import React, { useState } from "react";

const useNav = () => {
  const [navState, setNavState] = useState(0);

  const onNavChange = () => {
    setNavState((prev) => !prev);
  };

  return { navState, onNavChange };
};

export default useNav;

import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    });
    console.log("in online useeffect");

    window.addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);
  console.log("in online");
  return isOnline;
};

export default useOnlineStatus;

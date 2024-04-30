import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStats, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStats;
};
export default useOnlineStatus;

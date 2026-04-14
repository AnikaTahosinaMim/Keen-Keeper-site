import React, { createContext, useState } from "react";
export const TimeContext = createContext();

const ProviderTime = ({ children }) => {
  const [time, setTime] = useState([]);
  const data = {
    time,
    setTime,
  };
  return <TimeContext.Provider value={data}>{children}</TimeContext.Provider>;
};

export default ProviderTime;

import React from "react";

const CurrentTempatureUnitContext = React.createContext({
  currentTempatureUnit: "",
  handleToggleSwitchChange: () => {},
});

export default CurrentTempatureUnitContext;

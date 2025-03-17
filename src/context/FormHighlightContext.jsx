import React, { createContext, useState } from "react";

export const FormHighlightContext = createContext();

export const FormHighlightProvider = ({ children }) => {
  const [formHighlight, setFormHighlight] = useState(false);

  const triggerFormHighlight = () => {
    setFormHighlight(true);
    setTimeout(() => setFormHighlight(false), 4000);
  };

  return (
    <FormHighlightContext.Provider
      value={{ formHighlight, triggerFormHighlight, setFormHighlight }}
    >
      {children}
    </FormHighlightContext.Provider>
  );
};

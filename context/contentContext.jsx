import React, { createContext, useContext, useState } from "react";
import { LoggedContextData } from "../types/types";

const ContentContext = createContext < LoggedContextData > { content: false, setContent: () => {} };

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState < boolean > false;

  //All content structure goes here

  const contentValue = { content, setContent };
  return <ContentContext.Provider value={contentValue}>{children}</ContentContext.Provider>;
};
export function useContent() {
  return useContext(ContentContext);
}

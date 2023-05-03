import { createContext } from "react";

export const SlideInContext = createContext({
  handleFilterValues: (filterValues: { name: string; value: string }[]) => {},
});

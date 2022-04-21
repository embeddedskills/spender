import { createContext } from "react";

const YearContext = createContext({
  filterYear: (year) => {},
  shownYear: null,
  selectYear: (year) => {},
  shownTags: null,
  setTag: () => {},
  filterByTags: (objectsArray) => {},
});

export default YearContext;

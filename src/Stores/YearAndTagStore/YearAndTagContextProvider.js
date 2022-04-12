import { useState } from "react";
import YearContext from "./YearAndTagContext";

function YearContextProvider(props) {
  const [selectedYear, setSelectedYear] = useState("all");

  function selectYearHandler(year) {
    setSelectedYear(year);
  }

  function filterYearHandler(yearArray) {
    let extractedYears = yearArray.map((item) => {
      return item.date.getFullYear();
    });
    return extractedYears.filter(
      (year, index) => index === extractedYears.indexOf(year)
    );
  }

  const [selectedTag, setSelectedTag] = useState("all");

  function setTagHandler(tag) {
    setSelectedTag(tag);
  }
  function filterByTagHandler(objectsArray) {
    let tagsArray = objectsArray.map((item) => {
      return item["tag"];
    });
    return tagsArray.filter((tag, index) => index === tagsArray.indexOf(tag));
  }

  const YContext = {
    shownYear: selectedYear,
    selectYear: selectYearHandler,
    filterYear: filterYearHandler,
    shownTags: selectedTag,
    setTag: setTagHandler,
    filterByTags: filterByTagHandler,
  };

  return (
    <YearContext.Provider value={YContext}>
      {props.children}
    </YearContext.Provider>
  );
}

export default YearContextProvider;

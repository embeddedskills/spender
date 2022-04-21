import { useState } from "react";

const useFilter = (valueType) => {
  const [selectedValue, setSelectedValue] = useState("all");

  function selectValueHandler(value) {
    setSelectedValue(value);
  }
  function filterValueHandler(valuesArray) {
    let extractedValues = [];

    if (valueType == "year") {
      extractedValues = valuesArray.map((item) => {
        return item.date.getFullYear();
      });
    } else if (valueType == "tag") {
      extractedValues = valuesArray.map((item) => {
        return item["tag"];
      });
    }

    return extractedValues.filter(
      (value, index) => index === extractedValues.indexOf(value)
    );
  }

  return [selectedValue, selectValueHandler, filterValueHandler];
};
export default useFilter;

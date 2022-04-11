import "./Filter.css";

const Filter = (props) => {
  return (
    <div className="filter">
      <div className="filter__control">
        <label htmlFor="elect">Filter by {props.name}:</label>
        <select
          name="Select"
          multiple={false}
          onChange={(e) => props.setValue(e.target.value)}
        >
          <option value="all">Show All</option>
          {props.array.map((arrayEl) => {
            return <option key={arrayEl}>{arrayEl}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;

//props.name => i.e. name=tag name=Year
//props.array=> i.e. const dummyArray=["dummy1","dummy2","dummy3","dummy4"]  array={dummyArray}
//props.setValue==> setValue={setYear}
//props.availableValues ==> availableValues={shownYears}

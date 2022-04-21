import Income from "../Components/Income/Income";
import NewInput from "../Components/UI/NewInput/NewInput";

const IncomePage = () => {
  return (
    <>
      <NewInput addItem={"income"} name={"Income"} />
      <Income />
    </>
  );
};

export default IncomePage;

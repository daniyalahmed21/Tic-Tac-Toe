import React from "react";
import Grid from "./components/Grid/Grid";

const App = () => {
  return (
    <div className="flex flex-col mt-20 justify-center items-center">
      <div className=" w-full sm:w-[50%]  ">
        <Grid numberOfCard={9} />
      </div>
    </div>
  );
};

export default App;

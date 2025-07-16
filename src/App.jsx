import React from "react";
import Grid from "./components/Grid/Grid";

const App = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <div className=" w-full sm:w-[50%]  mt-10">
        <Grid numberOfCard={9} />
      </div>
    </div>
  );
};

export default App;

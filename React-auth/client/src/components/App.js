import React from "react";
import Header from "./Header";

const App = ({ children}) => {

    // console.log(props);
    
  return (
    <div>
      <Header />
      { children }
    </div>
  );
};

export default App;

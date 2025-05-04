import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/custom/Header";
import Main from "./components/custom/Main";

function App() {
  return (
    <div className="bg-[#f0f2f5] text-[#050505] font-quicksand min-h-screen overflow-hidden">
      <Header />
      <Main />
    </div>
  );
}

export default App;

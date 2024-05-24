import Cards from "@/components/Cards";
import React from "react";

function OverSized() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 xl:grid-col-5 px-4">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default OverSized;

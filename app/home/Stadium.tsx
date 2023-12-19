import Image from "next/image";
import React from "react";

const Stadium = () => {
  return (
    <div className="stad">
      <div className="flex justify-center mt-6">
        <Image
          src="/stadium.png"
          alt="Stadium's map"
          width={800}
          height={1000}
        />
      </div>

      <div className="div-links">
        <div className="zone-1 hvr">
          <a className="zone" href="#" onClick={() => {}}></a>
        </div>
        <div className="zone-2 hvr">
          <a className="zone" href="#" onClick={() => {}}></a>
        </div>
        <div className="zone-3 hvr">
          <a className="zone" href="#" onClick={() => {}}></a>
        </div>
        <div className="zone-4 hvr">
          <a className="zone" href="#" onClick={() => {}}></a>
        </div>
        <div className="zone-5 hvr">
          <a className="zone" href="#" onClick={() => {}}></a>
        </div>
        <div className="zone-6 hvr">
          <a className="zone" href="#" onClick={() => {}}></a>
        </div>
        <div className="zone-7 hvr">
          <a className="zone" href="#" onClick={() => {}}></a>
        </div>
        <div className="zone-8 hvr">
          <a className="zone" href="#" onClick={() => {}}></a>
        </div>
        <div className="zone-9 hvr">
          <a className="zone" href="#" onClick={() => {}}></a>
        </div>
        <div className="zone-10 hvr">
          <a className="zone" href="#" onClick={() => {}}></a>
        </div>
      </div>
    </div>
  );
};

export default Stadium;

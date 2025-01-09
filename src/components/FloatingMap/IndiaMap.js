import React, { useState } from "react";
import India from "@svg-maps/india";
import "react-svg-map/lib/index.css";
import ReactDatamaps from "react-india-states-map";

function IndiaMap({enabled = true}) {
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");

  function onLocationClick(event) {
    setStateCode(event.target.id);
    setStateName(event.target.getAttribute("name"));
    console.log("Id", event.target.id);
    console.log("Name", event.target.getAttribute("name"));
  }

  return (
    <div className="map-container"  style={{ pointerEvents: enabled ? "auto" : "none" }}>
      <ReactDatamaps map={India} onClick={onLocationClick} />
    </div>
  );
}

export default IndiaMap;
import React from "react";

export function SequenceName({ sequenceName, sequenceLength, isProtein }) {
  return (
    <div
      key="circViewSvgCenterText"
      style={{ textAlign: "center", marginBottom: "32px" }}
    >
      <span>{sequenceName} </span>
      <br />
      <span>
        {isProtein
          ? `${Math.floor(sequenceLength / 3)} AAs`
          : `${sequenceLength} bps`}
      </span>
    </div>
  );
}

import React from "react";

function Axis({
  radius,
  showAxisNumbers,
  tickMarkHeight = 5,
  textOffset = 15,
  ringThickness = 4,
  zoomLevel
}) {
  const height =
    (ringThickness + (showAxisNumbers ? textOffset + tickMarkHeight : 0)) /
    zoomLevel;
  const radiusToUse = showAxisNumbers
    ? radius + textOffset + tickMarkHeight
    : radius;

  const component = (
    <g key="veAxis" className="veAxis">
      <circle
        className="veAxisLine veAxisInner"
        key="circle"
        r={radiusToUse - 10}
        style={{
          fill: "none",
          stroke: "rgba(115, 117, 142, 0.7)",
          strokeWidth: 20
        }}
      />
    </g>
  );
  return {
    component,
    height
  };
}

export default Axis;

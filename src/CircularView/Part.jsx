import React from "react";
import { startsWith } from "lodash";
import drawDirectedPiePiece from "./drawDirectedPiePiece";

export default function Part({
  radius,
  arrowheadLength = 0.5,
  annotationHeight,
  totalAngle,
  color,
  overlapsSelf,
  className
}) {
  const path = drawDirectedPiePiece({
    radius,
    overlapsSelf,
    annotationHeight,
    totalAngle,
    arrowheadLength,
    tailThickness: 1 //feature specific
  });
  const colorToUse = startsWith(color, "override_")
    ? color.replace("override_", "")
    : "#000";
  return (
    <path
      className={className}
      strokeWidth="0.5"
      stroke={colorToUse}
      // fill={colorToUse}
      d={path.print()}
    />
  );
}

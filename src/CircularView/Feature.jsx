import { startsWith } from "lodash";
import React from "react";

import drawDirectedPiePiece from "./drawDirectedPiePiece";
import { getInternalLabel } from "./getInternalLabel";
import shouldFlipText from "./shouldFlipText";

export default function Feature(props) {
  const {
    color = "orange",
    radius,
    containsLocations,
    arrowheadLength = 0.5,
    annotationHeight,
    className,
    ellipsizedName,
    annotationType,
    arrowheadType,
    overlapsSelf,
    rotationRadians,
    centerAngle,
    totalAngle
  } = props;
  const isPart = annotationType === "part";
  let colorToUse = color;
  if (isPart) {
    colorToUse = startsWith(color, "override_")
      ? color.replace("override_", "")
      : "#000";
  }
  const labelNeedsFlip = shouldFlipText(centerAngle + rotationRadians);
  if (containsLocations) {
    const path = drawDirectedPiePiece({
      radius: radius,
      labelNeedsFlip,
      annotationHeight: annotationHeight / 8,
      totalAngle,
      arrowheadLength: 80 / radius,
      tailThickness: 1 //feature specific
    });
    return (
      <path
        className={className}
        strokeWidth=".5"
        stroke="black"
        fill={colorToUse}
        d={path.print()}
      />
    );
  }
  const radiusToUse = isPart ? radius / 2 : radius;
  const annotationHeightToUse = isPart ? radius : annotationHeight;
  const arrowheadLengthToUse = isPart ? arrowheadLength / 3 : arrowheadLength;
  const arrowheadTypeToUse = isPart ? "NONE" : arrowheadType;
  const [path, textPath] = drawDirectedPiePiece({
    returnTextPath: true,
    overlapsSelf,
    arrowheadType: arrowheadTypeToUse,
    hasLabel: ellipsizedName,
    labelNeedsFlip,
    radius: radiusToUse,
    annotationHeight: annotationHeightToUse,
    totalAngle,
    arrowheadLength: arrowheadLengthToUse,
    tailThickness: 1 //feature specific
  });

  return (
    <>
      <path
        className={className}
        strokeWidth=".5"
        stroke={isPart ? "black" : "black"}
        fill={isPart ? "grey" : colorToUse}
        d={path.print()}
      />
      {getInternalLabel({ ...props, colorToUse, textPath, isPart })}
    </>
  );
}

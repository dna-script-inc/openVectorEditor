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
    arrowheadType,
    overlapsSelf,
    rotationRadians,
    centerAngle,
    totalAngle,
    isBlockRegion,
    isGenePart
  } = props;

  let colorToUse = color;
  if (isBlockRegion) {
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
  const radiusToUse = isBlockRegion ? radius / 2 : radius;
  const annotationHeightToUse = isBlockRegion ? radius : annotationHeight;
  const arrowheadLengthToUse = isBlockRegion
    ? arrowheadLength / 3
    : arrowheadLength;
  const arrowheadTypeToUse = isBlockRegion ? "NONE" : arrowheadType;
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
        stroke={"black"}
        fill={isBlockRegion ? "grey" : colorToUse}
        fillOpacity={isGenePart ? 1 : 0.3}
        d={path.print()}
      />
      {getInternalLabel({
        ...props,
        colorToUse,
        textPath,
        isPart: isBlockRegion
      })}
    </>
  );
}

import { DNAComplementMap } from "ve-sequence-utils";

const dnaToColor = {
  a: "lightgreen",
  c: "#658fff",
  g: "yellow",
  t: "#EE6262"
};
export default dnaToColor;

export function getDnaColor(char, isReverse) {
  return (
    dnaToColor[
      isReverse ? DNAComplementMap[char.toLowerCase()] : char.toLowerCase()
    ] || "lightgrey"
  );
}

export function getOptimizedColor(char, optimizedChar) {
  if (optimizedChar.toLowerCase() !== char.toLowerCase()) {
    return "#4BB667";
  }
  return "rgba(7, 9, 25, 0)";
}

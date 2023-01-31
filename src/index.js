import "@fontsource/ubuntu-mono";
import "./addOnGlobals";
import { FocusStyleManager } from "@blueprintjs/core";
import { showContextMenu } from "teselagen-react-components";
import "./createVectorEditor/index.jsx";
import "./style.css";
export { getUserGroupLabel } from "./CutsiteFilter/AdditionalCutsiteInfoDialog.jsx";

window.tgCreateMenu = showContextMenu;
// window.tgCreateMenu = (menu, e, e2) => {
//   (e||e2).stopPropagation()
//   (e || e2)
// } //add this to the window so people can easily override the default context menus

FocusStyleManager.onlyShowFocusOnTabs();
export { getGaps } from "./AlignmentView/getGaps";
export { default as createVectorEditor } from "./createVectorEditor/index.jsx";
export { default as withEditorProps, connectToEditor } from "./withEditorProps";
export { default as withEditorInteractions } from "./withEditorInteractions/index.jsx";
export { default as specialCutsiteFilterOptions } from "./constants/specialCutsiteFilterOptions";
//export components
export {
  default as CircularView,
  CircularView as CircularViewUnconnected
} from "./CircularView/index.jsx";
export { default as SimpleCircularOrLinearView } from "./SimpleCircularOrLinearView.jsx";
export { default as RowView, RowView as RowViewUnconnected } from "./RowView/index.jsx";
export { default as RowItem } from "./RowItem/index.jsx";
export { default as Editor, Editor as EditorUnconnected } from "./Editor/index.jsx";
export { ToolBar } from "./ToolBar/index.jsx";
export {
  default as CutsiteFilter,
  CutsiteFilter as CutsiteFilterUnconnected
} from "./CutsiteFilter/index.jsx";
export {
  default as LinearView,
  LinearView as LinearViewUnconnected
} from "./LinearView/index.jsx";
export {
  default as StatusBar,
  StatusBar as StatusBarUnconnected
} from "./StatusBar/index.jsx";
export {
  default as DigestTool,
  DigestTool as DigestToolUnconnected
} from "./DigestTool/DigestTool.jsx";
export { default as withHover } from "./helperComponents/withHover.jsx";

export {
  default as vectorEditorReducer,
  vectorEditorMiddleware,
  actions
} from "./redux";
export { default as updateEditor } from "./updateEditor";
export { default as addAlignment } from "./addAlignment";
export { default as selectors } from "./selectors";

export { default as getRangeAnglesSpecial } from "./CircularView/getRangeAnglesSpecial";
export { default as PositionAnnotationOnCircle } from "./CircularView/PositionAnnotationOnCircle";
export { default as EnzymeViewer } from "./EnzymeViewer/index.jsx";
export { default as AlignmentView } from "./AlignmentView/index.jsx";
export { default as getOveHotkeyDefs } from "./commands/getOveHotkeyDefs";

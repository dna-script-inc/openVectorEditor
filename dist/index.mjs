exports.__esModule = !0;
exports.withHover = exports.withEditorProps = exports.withEditorInteractions = exports.vectorEditorReducer = exports.vectorEditorMiddleware = exports.updateEditor = exports.specialCutsiteFilterOptions = exports.getUserGroupLabel = exports.getRangeAnglesSpecial = exports.getOveHotkeyDefs = exports.getGaps = exports.createVectorEditor = exports.connectToEditor = exports.addAlignment = exports.actions = exports.ToolBar = exports.StatusBarUnconnected = exports.StatusBar = exports.SimpleCircularOrLinearView = exports.RowViewUnconnected = exports.RowView = exports.RowItem = exports.PositionAnnotationOnCircle = exports.LinearViewUnconnected = exports.LinearView = exports.EnzymeViewer = exports.EditorUnconnected = exports.Editor = exports.DigestToolUnconnected = exports.DigestTool = exports.CutsiteFilterUnconnected = exports.CutsiteFilter = exports.CircularViewUnconnected = exports.CircularView = exports.AlignmentView = void 0;
require("@fontsource/ubuntu-mono");
require("./addOnGlobals");
var q = require("@blueprintjs/core"), C = require("teselagen-react-components"), E = r(require("./createVectorEditor/index.jsx"));
exports.createVectorEditor = E.default;
require("./style.css");
var V = require("./CutsiteFilter/AdditionalCutsiteInfoDialog.jsx");
exports.getUserGroupLabel = V.getUserGroupLabel;
var O = require("./AlignmentView/getGaps");
exports.getGaps = O.getGaps;
var d = t(require("./withEditorProps"));
exports.withEditorProps = d.default;
exports.connectToEditor = d.connectToEditor;
var h = r(require("./withEditorInteractions/index.jsx"));
exports.withEditorInteractions = h.default;
var R = r(require("./constants/specialCutsiteFilterOptions"));
exports.specialCutsiteFilterOptions = R.default;
var l = t(require("./CircularView/index.jsx"));
exports.CircularView = l.default;
exports.CircularViewUnconnected = l.CircularView;
var U = r(require("./SimpleCircularOrLinearView.jsx"));
exports.SimpleCircularOrLinearView = U.default;
var c = t(require("./RowView/index.jsx"));
exports.RowView = c.default;
exports.RowViewUnconnected = c.RowView;
var D = r(require("./RowItem/index.jsx"));
exports.RowItem = D.default;
var x = t(require("./Editor/index.jsx"));
exports.Editor = x.default;
exports.EditorUnconnected = x.Editor;
var m = require("./ToolBar/index.jsx");
exports.ToolBar = m.ToolBar;
var f = t(require("./CutsiteFilter/index.jsx"));
exports.CutsiteFilter = f.default;
exports.CutsiteFilterUnconnected = f.CutsiteFilter;
var w = t(require("./LinearView/index.jsx"));
exports.LinearView = w.default;
exports.LinearViewUnconnected = w.LinearView;
var v = t(require("./StatusBar/index.jsx"));
exports.StatusBar = v.default;
exports.StatusBarUnconnected = v.StatusBar;
var g = t(require("./DigestTool/DigestTool.jsx"));
exports.DigestTool = g.default;
exports.DigestToolUnconnected = g.DigestTool;
var S = r(require("./helperComponents/withHover.jsx"));
exports.withHover = S.default;
var u = t(require("./redux"));
exports.vectorEditorReducer = u.default;
exports.vectorEditorMiddleware = u.vectorEditorMiddleware;
exports.actions = u.actions;
var T = r(require("./updateEditor"));
exports.updateEditor = T.default;
var y = r(require("./addAlignment"));
exports.addAlignment = y.default;
var A = r(require("./CircularView/getRangeAnglesSpecial"));
exports.getRangeAnglesSpecial = A.default;
var M = r(require("./CircularView/PositionAnnotationOnCircle"));
exports.PositionAnnotationOnCircle = M.default;
var P = r(require("./EnzymeViewer/index.jsx"));
exports.EnzymeViewer = P.default;
var L = r(require("./AlignmentView/index.jsx"));
exports.AlignmentView = L.default;
var F = r(require("./commands/getOveHotkeyDefs"));
exports.getOveHotkeyDefs = F.default;
function _(e) {
  if (typeof WeakMap != "function")
    return null;
  var a = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
  return (_ = function(p) {
    return p ? i : a;
  })(e);
}
function t(e, a) {
  if (!a && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var i = _(a);
  if (i && i.has(e))
    return i.get(e);
  var o = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var n in e)
    if (n !== "default" && Object.prototype.hasOwnProperty.call(e, n)) {
      var s = p ? Object.getOwnPropertyDescriptor(e, n) : null;
      s && (s.get || s.set) ? Object.defineProperty(o, n, s) : o[n] = e[n];
    }
  return o.default = e, i && i.set(e, o), o;
}
function r(e) {
  return e && e.__esModule ? e : { default: e };
}
window.tgCreateMenu = C.showContextMenu;
q.FocusStyleManager.onlyShowFocusOnTabs();

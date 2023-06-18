// @ts-check

import { style } from "iuai";
import { Id } from "./refs";

export function initCss() {
  style("*", {
    fontFamily: "monospace",
  });
  style("th", {
    minWidth: "9ch",
  });
  style(".margin", {
    margin: "1em",
  });
  style(".center", {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(max(-50%, -50vw), max(-50%, -50vh))",
  });
  style("td.checkbox", {
    textAlign: "center",
  });
  style("a, a:visited", {
    color: "blue",
  });
  style(`#${Id.loginContainer}`, {
    padding: "2em",
  });
  style(`#${Id.content}`, {
    maxWidth: "100%",
  });
  style(`#${Id.content} table`, {
    margin: "auto",
    overflowX: "scroll",
  });
  style(`#${Id.userEmail}`, {
    color: "#a9a9a9",
  });
}

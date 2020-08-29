import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/popup.css";

function Popup() {
  return (
    <div className="popup">
      {/* <h2>{ chrome.i18n.getMessage("appName") }</h2> */}
      {/* <p>{ chrome.i18n.getMessage("appDesc") }</p> */}
      Hi there
    </div>
  );
}

ReactDOM.render(
  <Popup />,
  document.getElementById('root')
)

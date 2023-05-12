import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Gallery({ title, itemId }) {
  const visibility = React.useContext(VisibilityContext);
  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      role="button"
      tabIndex={0}
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "160px",
        userSelect: "none"
      }}
      className="card"
    >
      <div>
        <div>{title}</div>
        <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
          visible: {JSON.stringify(visible)}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "bisque",
          height: "200px"
        }}
      />
    </div>
  );
}

export default Gallery;

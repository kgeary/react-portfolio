import React from "react";

function Container(props) {

  let className = "container flex-fill mt-3 px-0";

  if (props.className) {
    className += " " + props.className;
  }

  return (
    <div className={className}>
      <section>
        {props.children}
      </section>
    </div>
  );
}

export default Container;
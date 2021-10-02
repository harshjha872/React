import React from "react";

function Minicard(props) {
  return (
    <div className="bg-white my-4 mr-6 h-20 w-20 rounded-2xl object-center object-cover">
      <svg
        className="p-4 h-full w-full"
        xmlns={props.xmlns}
        width={props.width}
        height={props.height}
        fill={props.fill}
        class={props.class}
        viewBox={props.viewBox}
      >
        <path d={props.d} />
      </svg>
    </div>
  );
}

export default Minicard;

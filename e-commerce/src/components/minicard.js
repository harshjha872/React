import React from "react";

function Minicard(props) {
  return (
    <div className="bg-white flex justify-center  my-4 mr-6 items-center h-16 w-16 rounded-2xl object-center object-cover">
      <svg
        xmlns={props.xmlns}
        width={props.width}
        height={props.height}
        fill={props.fill}
        class={props.class}
        viewBox={props.viewBox}
      >
        <path d={props.d} />
        <path d={props.d2} />
      </svg>
    </div>
  );
}

export default Minicard;

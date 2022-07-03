import React from "react";

function ForceUpdate() {
  const forceUpdate = React.useReducer((bool) => !bool)[1];

  const handleClick = () => {
    forceUpdate();
  };

  return (
    <div>
      <button onClick={handleClick}>Force update</button>
    </div>
  );
}

export default ForceUpdate;

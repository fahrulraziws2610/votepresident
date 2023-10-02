import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>coblos</button>
    </div>
  );
}

export default Button;

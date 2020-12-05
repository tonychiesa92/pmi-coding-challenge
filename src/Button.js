import React, { useState } from "react";

const Button = () => {
    const [status, setStatus] = useState(false);
  
    return (
      <button onClick={() => setStatus(!status)}>
        {`${status ? 'Stop' : 'Start'}`}
      </button>
    );
  };

export default Button;
import React from "react";

// import React from 'react';

export default function Highlight({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "20px",
        color: "#fff",
        padding: "6px",
        cursor: "pointer",
      }}
    >
      {children}
    </span>
  );
}

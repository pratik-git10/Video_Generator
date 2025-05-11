import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default layout;

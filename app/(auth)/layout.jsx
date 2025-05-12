import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-[#18181b] flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

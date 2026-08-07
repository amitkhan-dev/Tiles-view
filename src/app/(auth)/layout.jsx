
import React from 'react';
import { Toaster } from "react-hot-toast";

const AuthLayout = ({children}) => {
  return (
    <div>
      {children}
      <Toaster position="top-right" />
    </div>
  );
};

export default AuthLayout;
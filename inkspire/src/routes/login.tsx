import { SignIn } from "@clerk/clerk-react";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-[var(--surface-color)]">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;

"use client";

import Login from "@/app/login/login";
import Register from "@/app/register/register";
import ResetPassword from "@/app/password-reset/reset-password";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface AuthFormProps {
  type: "login" | "reset" | "register";
}

const AuthForm = (props: AuthFormProps) => {
  return (
    <Card className="flex flex-col mb-4 animate-in">
      <CardHeader className="self-center font-semibold text-lg">
        {props.type === "register" ? (
          <span>Getting Started</span>
        ) : props.type === "login" ? (
          <span>Welcome Back</span>
        ) : (
          <span>Reset Password</span>
        )}
      </CardHeader>
      <CardContent>
        {props.type === "register" ? (
          <Register />
        ) : props.type === "login" ? (
          <Login />
        ) : (
          <ResetPassword />
        )}
      </CardContent>
    </Card>
  );
};

export default AuthForm;

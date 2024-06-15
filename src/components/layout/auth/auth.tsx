"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Register from "./register";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks";
import Login from "@/components/layout/auth/login";
import ResetPassword from "./reset-password";

const AuthForm = () => {
  const formState = useAppSelector<RootState>((state) => state.auth.authType);
  return (
    <Card className="flex flex-col mb-4 animate-in">
      <CardHeader className="self-center font-semibold text-lg">
        {formState === "register" ? (
          <span>Getting Started</span>
        ) : formState == "login" ? (
          <span>Welcome Back</span>
        ) : (
          <span>Reset Password</span>
        )}
      </CardHeader>
      <CardContent>
        {formState === "register" ? (
          <Register />
        ) : formState == "login" ? (
          <Login />
        ) : (
          <ResetPassword />
        )}
      </CardContent>
    </Card>
  );
};

export default AuthForm;

"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChangeEvent, FormEvent, useState } from "react";
import FormInputComponent from "./input";
import OAuthButtons from "./oauth-buttons";
import CheckAccountStatus from "./check-account";
import { useAppDispatch } from "@/lib/hooks";
import { setAuthType } from "@/lib/features/auth-slice";
interface Form {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<Form>({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ email: "", password: "" });
  };
  const inputFormClassName = "w-full";

  return (
    <>
      <form
        action=""
        className="flex flex-col gap-5 rounded-md px-3 py-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5">
          <FormInputComponent
            onChange={handleChange}
            className={inputFormClassName}
            name="email"
            htmlFor="email"
            label="Email Address:"
            value={formData?.email}
            key="email"
            autoComplete="email"
          />
          <FormInputComponent
            onChange={handleChange}
            className={inputFormClassName}
            name="password"
            htmlFor="password"
            label="Password:"
            value={formData?.password}
            key="Password"
            type="password"
          >
            <p
              className="self-end text-xs cursor-pointer "
              onClick={() => dispatch(setAuthType("reset"))}
            >
              Forgotten your password? Reset.
            </p>
          </FormInputComponent>
        </div>
        <Button type="submit" className="self-end" size={"sm"}>
          Sign Up
        </Button>
        <div className="flex gap-2 w-full justify-center items-center">
          <Separator className="w-[39%]" />
          <p className="text-slate-500">OR</p>
          <Separator className="w-[39%]" />
        </div>
        <OAuthButtons />
        <CheckAccountStatus className="self-center" />
      </form>
    </>
  );
};

export default Login;

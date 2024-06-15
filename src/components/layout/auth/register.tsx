"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChangeEvent, FormEvent, useState } from "react";
import CheckAccountStatus from "./check-account";
import FormInputComponent from "./input";
import OAuthButtons from "./oauth-buttons";
interface Form {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  rePassword: string;
}

const Register = () => {
  const [formData, setFormData] = useState<Form>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    rePassword: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // await useRegisterAccountMutation(email: formData.email, first_name: formData.firstName, last_name: formData.lastName, password: formData.password, re_password: formData.rePassword)
  };
  const inputFormClassName = "w-full";

  return (
    <>
      <form
        action=""
        className="flex flex-col gap-5 rounded-md px-3 py-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 w-full lg:flex-row lg:gap-4">
          <FormInputComponent
            onChange={handleChange}
            className={cn(inputFormClassName, "w-1/2")}
            name="firstName"
            htmlFor="firstName"
            label="First Name:"
            value={formData?.firstName}
            key="firstName"
            autoComplete="first-name"
          />
          <FormInputComponent
            onChange={handleChange}
            className={cn(inputFormClassName, "w-1/2")}
            name="lastName"
            htmlFor="lastName"
            label="Last Name:"
            value={formData?.lastName}
            key="lastName"
            autoComplete="family-name"
          />
        </div>
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
          />
          <FormInputComponent
            onChange={handleChange}
            className={inputFormClassName}
            name="rePassword"
            htmlFor="rePassword"
            label="Confirm Password:"
            value={formData?.rePassword}
            key="rePassword"
            type="password"
          />
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
        <CheckAccountStatus className={"self-center"} />
      </form>
    </>
  );
};

export default Register;

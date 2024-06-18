"use client";
import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import CheckAccountStatus from "../../components/layout/auth/check-account";
import FormInputComponent from "../../components/layout/auth/input";

const ResetPassword = () => {
  const [formData, setFormData] = useState<Record<"email", string>>({
    email: "",
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
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
        </div>
        <Button type="submit" className="self-end" size={"sm"}>
          Sign Up
        </Button>
        <CheckAccountStatus type="reset" className="self-center" />
      </form>
    </>
  );
};

export default ResetPassword;

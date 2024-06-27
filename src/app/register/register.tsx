"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Spinner from "@/components/ui/spinner";
import { useRegisterAccountMutation } from "@/lib/features/auth-endpoints";
import { authenticateUser } from "@/lib/features/auth-slice";
import { useAppDispatch } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import CheckAccountStatus from "../../components/layout/auth/check-account";
import FormInputComponent from "../../components/layout/auth/input";
import OAuthButtons from "../../components/layout/auth/oauth-buttons";
interface Form {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  re_password: string;
}

const Register = () => {
  const [formData, setFormData] = useState<Form>({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    re_password: "",
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [register, { isLoading }] = useRegisterAccountMutation();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await register({ ...formData })
      .unwrap()
      .then(() => {
        setFormData({
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          re_password: "",
        });
        toast.success("Account registration success.", {
          description: "You are being redirected to the dashboard.",
        });
        dispatch(authenticateUser());
        router.push("/login");
      })
      .catch((error) => {
        toast.error("Failed to registration account.", {
          description: "Check your credentials and try again.",
        });
        console.error(error);
      });
  };
  const inputFormClassName = "w-full";

  return (
    <>
      <form
        action=""
        className="flex flex-col gap-5 rounded-md px-3 py-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 w-full min-[680px]:flex-row lg:gap-4">
          <FormInputComponent
            onChange={handleChange}
            className={cn(inputFormClassName, "w-1/2")}
            name="first_name"
            htmlFor="first_name"
            label="First Name:"
            value={formData?.first_name}
            key="first_name"
            autoComplete="first-name"
          />
          <FormInputComponent
            onChange={handleChange}
            className={cn(inputFormClassName, "w-1/2")}
            name="last_name"
            htmlFor="last_name"
            label="Last Name:"
            value={formData?.last_name}
            key="last_name"
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
            name="re_password"
            htmlFor="re_password"
            label="Confirm Password:"
            value={formData?.re_password}
            key="re_password"
            type="password"
          />
        </div>
        <Button
          type="submit"
          className="self-end gap-2"
          size={"sm"}
          disabled={isLoading}
        >
          {isLoading && <Spinner />}
          <p>Sign Up</p>
        </Button>
        <div className="flex gap-2 w-full justify-center items-center">
          <Separator className="w-[39%]" />
          <p className="text-slate-500">OR</p>
          <Separator className="w-[39%]" />
        </div>
        <OAuthButtons />
        <CheckAccountStatus type="register" className={"self-center"} />
      </form>
    </>
  );
};

export default Register;

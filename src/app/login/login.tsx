"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Spinner from "@/components/ui/spinner";
import { useLoginAccountMutation } from "@/lib/features/auth-endpoints";
import { authenticateUser } from "@/lib/features/auth-slice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import CheckAccountStatus from "../../components/layout/auth/check-account";
import FormInputComponent from "../../components/layout/auth/input";
import OAuthButtons from "../../components/layout/auth/oauth-buttons";
interface Form {
  email: string;
  password: string;
}

const Login = () => {
  const [login, { isLoading }] = useLoginAccountMutation();
  const router = useRouter();
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
    login({ ...formData })
      .unwrap()
      .then(() => {
        dispatch(authenticateUser());
        setFormData({ email: "", password: "" });
        toast.success("Account sign in successful.", {
          description: "You are being redirected to the home page.",
        });
        router.push("/dashboard");
      })
      .catch((error) => {
        toast.error("Login unsuccessful.", {
          description: "Please check your credentials and try again.",
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
            <Link
              className="self-end text-xs cursor-pointer "
              href={"/reset-password"}
            >
              Forgotten your password? Reset.
            </Link>
          </FormInputComponent>
        </div>
        <Button
          type="submit"
          className="self-end gap-2"
          size={"sm"}
          disabled={isLoading}
        >
          {isLoading && <Spinner />}
          <p>Sign In</p>
        </Button>
        <div className="flex gap-2 w-full justify-center items-center">
          <Separator className="w-[39%]" />
          <p className="text-slate-500">OR</p>
          <Separator className="w-[39%]" />
        </div>
        <OAuthButtons />
        <CheckAccountStatus type="login" className="self-center" />
      </form>
    </>
  );
};

export default Login;

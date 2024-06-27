"use client";
import FormInputComponent from "@/components/layout/auth/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Spinner from "@/components/ui/spinner";
import { useResetPasswordMutation } from "@/lib/features/auth-endpoints";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

interface PageParams {
  params: { uid: string; token: string };
}

const Page = (searchParams: PageParams) => {
  const [reset, { isLoading }] = useResetPasswordMutation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    newPassword: "",
    rePassword: "",
  });
  const inputFormClassName = "w-full";
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
    reset({
      new_password: formData.newPassword,
      re_new_password: formData.rePassword,
      uid: searchParams.params.uid,
      token: searchParams.params.token,
    })
      .unwrap()
      .then(() => {
        setFormData({ newPassword: "", rePassword: "" });
        toast.success("Password reset successful", {
          description: "You are being redirected to the login page.",
        });
        router.replace("/login");
      })
      .catch((error) => {
        toast.error("Failed to reset password.", {
          description: "Check the passwords and try again.",
        });
        console.error(error);
      });
  };

  return (
    <>
      <main className="w-full flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col gap-4 justify-center items-center w-full animate-slide-from-down-and-fade-6">
          <Card className="flex flex-col mb-4 animate-in">
            <CardHeader className="self-center font-semibold text-lg">
              Reset Password
            </CardHeader>
            <CardContent>
              <form
                action=""
                className="flex flex-col gap-5 rounded-md px-3 py-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-5">
                  <FormInputComponent
                    onChange={handleChange}
                    className={inputFormClassName}
                    name="newPassword"
                    htmlFor="newPassword"
                    label="New Password:"
                    value={formData?.newPassword}
                    key="password"
                    autoComplete="new-password"
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
                    autoComplete="new-password"
                    type="password"
                  />
                </div>
                <Button
                  type="submit"
                  className="self-end flex gap-2"
                  size={"sm"}
                >
                  {isLoading && <Spinner />}
                  <span>Reset</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Page;

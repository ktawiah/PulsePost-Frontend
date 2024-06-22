"use client";
import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import CheckAccountStatus from "../../components/layout/auth/check-account";
import FormInputComponent from "../../components/layout/auth/input";
import { useRequestPasswordResetEmailMutation } from "@/lib/features/auth-endpoints";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Spinner from "@/components/ui/spinner";

const ResetPassword = () => {
  const [formData, setFormData] = useState<Record<"email", string>>({
    email: "",
  });
  const router = useRouter();
  const [requestUrl, { isLoading }] = useRequestPasswordResetEmailMutation();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await requestUrl({ email: formData.email })
      .unwrap()
      .then(() => {
        toast.success("Email sent successfully.", {
          description: "Check your inbox to continue to the reset process.",
        });
        router.push("/login");
      })
      .catch((error) => {
        toast.error("Failed to reset password.", {
          description: "Check your email and try again.",
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
        </div>
        <Button type="submit" className="self-end flex gap-2" size={"sm"}>
          {isLoading && <Spinner />}
          <span>Send</span>
        </Button>
        <CheckAccountStatus type="reset" className="self-center" />
      </form>
    </>
  );
};

export default ResetPassword;

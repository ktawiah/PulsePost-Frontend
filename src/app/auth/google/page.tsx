"use client";
import Spinner from "@/components/ui/spinner";
import { useSocialAccountLoginMutation } from "@/lib/features/auth-endpoints";
import { authenticateUser } from "@/lib/features/auth-slice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const Page = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useSocialAccountLoginMutation();
  const router = useRouter();
  if (searchParams.get("code") && searchParams.get("state")) {
    login({
      code: searchParams.get("code")!,
      state: searchParams.get("state")!,
      provider: "google",
    })
      .unwrap()
      .then(() => {
        dispatch(authenticateUser());
        toast.success("Account login successful.", {
          description: "You are being redirected to the home page.",
        });
        router.push("/dashboard");
      })
      .catch((error) => {
        toast.error("Failed to log in.", {
          description: "An error occurred while logging in. Please try again.",
        });
        console.error(error);
      });
  }
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {isLoading && <Spinner className="text-2xl text-foreground" />}
    </div>
  );
};

export default Page;

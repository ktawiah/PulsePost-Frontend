"use client";
import Spinner from "@/components/ui/spinner";
import { useSocialAccountLoginMutation } from "@/lib/features/auth-endpoints";
import { authenticateUser } from "@/lib/features/auth-slice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useEffect, useRef } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useSocialAccountLoginMutation();
  const router = useRouter();
  const effectRan = useRef(false);

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    if (code && state && !effectRan.current) {
      login({ code, state, provider: "google-oauth2" })
        .unwrap()
        .then((data) => {
          dispatch(authenticateUser());

          toast.success("Account login successful.", {
            description: "You are being redirected to the home page.",
          });
          router.replace("/dashboard");
        })
        .catch((error) => {
          toast.error("Failed to log in.", {
            description:
              "An error occurred while logging in. Please try again.",
          });
          console.log(error);
        });
    }
    return () => {
      effectRan.current = true;
    };
  }, [login, router, dispatch, searchParams]);
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {isLoading && <Spinner className="text-foreground text-2xl" />}
    </div>
  );
};

export default Page;

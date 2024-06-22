import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useAppSelector } from "../lib/hooks";

export const useCheckAuthentication = () => {
  const authState = useAppSelector((state) => state.auth.isAuthenticated);
  const effectRan = useRef(false);
  const router = useRouter();
  useEffect(() => {
    if (!authState && !effectRan.current) {
      router.replace("/login");
    } else if (authState && !effectRan.current) {
      router.replace("/dashboard");
    }
    return () => {
      effectRan.current = true;
    };
  }, [authState, router]);
};

"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = (props: ErrorProps) => {
  const router = useRouter();

  useEffect(() => {
    console.error(props.error);
  }, [props.error]);

  return (
    <section className="bg-background">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-md mx-auto text-center">
          <h1 className="mt-3 text-2xl lg:text-3xl font-mono font-bold text-gray-800 dark:text-white md:text-3xl">
            Oops!
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            You are seeing this page because an error occurred when performing
            an action.
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 rounded-lg gap-x-2 sm:w-auto"
              onClick={() => router.back()}
              variant={"secondary"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </Button>

            <Button
              className="w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 rounded-lg shrink-0 sm:w-auto"
              onClick={() => props.reset()}
            >
              Try again
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;

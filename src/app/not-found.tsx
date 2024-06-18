"use client";
import Image from "next/image";
import notFoundImage from "../../public/illustration.svg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <section className="bg-background">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-primary md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn&apos;t exist.Here are some
            helpful links:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm  transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto"
              variant={"secondary"}
              onClick={() => router.back()}
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
              className="w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200  rounded-lg shrink-0 sm:w-auto"
              onClick={() => router.push("/")}
            >
              Take me home
            </Button>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <Image
            className="w-full max-w-lg lg:mx-auto"
            src={notFoundImage}
            alt=""
            width={1}
            height={1}
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;

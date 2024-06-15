import Logo from "@/components/ui/logo";
import { ModeToggle } from "@/components/ui/toggle-theme";
import dynamic from "next/dynamic";

const AuthForm = dynamic(() => import("@/components/layout/auth/auth"), {
  ssr: false,
});

const Page = () => {
  return (
    <>
      <div className="min-h-screen w-full relative">
        <main className="min-h-screen w-full flex flex-col justify-center items-center gap-8">
          <div className="absolute w-full top-3 sm:top:3 md:top:4 lg:top-5">
            <div className="flex justify-between w-full items-center">
              <Logo />
              <ModeToggle />
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center w-full">
            <AuthForm />
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;

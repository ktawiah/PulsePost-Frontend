import AuthForm from "@/components/layout/auth/form";

const Page = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <main className="w-full flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col gap-4 justify-center items-center w-full animate-slide-from-down-and-fade-6">
            <AuthForm type="login" />
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;

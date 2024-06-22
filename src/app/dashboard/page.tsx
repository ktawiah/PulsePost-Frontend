"use client";

import { useCheckAuthentication } from "@/hooks/use-check-auth";

const Page = () => {
  useCheckAuthentication();

  return (
    <>
      <main className="">Welcome to the dashboard</main>
    </>
  );
};

export default Page;

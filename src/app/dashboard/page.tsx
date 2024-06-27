import AllPosts from "@/components/layout/dashboard/all-posts";
import RecentPosts from "@/components/layout/dashboard/recent-posts";
import { Separator } from "@/components/ui/separator";

const Page = async () => {
  return (
    <>
      <Separator className="my-3" />
      <main className="w-full flex flex-col gap-4">
        <RecentPosts />

        <AllPosts />
      </main>
    </>
  );
};

export default Page;

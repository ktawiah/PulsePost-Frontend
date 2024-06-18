import Spinner from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Spinner className="text-foreground" />
    </div>
  );
};

export default Loading;

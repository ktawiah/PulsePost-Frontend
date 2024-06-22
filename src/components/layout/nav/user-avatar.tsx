import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import illustration from "@/../public/illustration.svg";

const UserAvatar = () => {
  return (
    <Avatar className={cn("cursor-pointer hidden lg:block")}>
      {/* <AvatarImage src={illustration} /> */}
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

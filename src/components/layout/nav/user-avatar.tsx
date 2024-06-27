import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src?: string | any;
  className?: string;
}

const UserAvatar = (props: UserAvatarProps) => {
  return (
    <Avatar className={cn("cursor-pointer", props.className)}>
      <AvatarImage src={props.src} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

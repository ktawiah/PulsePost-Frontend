import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

interface InputProps {
  name: InputHTMLAttributes<HTMLInputElement>["name"];
  value?: string;
  htmlFor: string;
  label: string;
  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
  className: InputHTMLAttributes<HTMLInputElement>["className"];
  id?: Pick<InputProps, "htmlFor">;
  autoComplete?: InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  type?: string;
  children?: ReactNode;
}

const FormInputComponent = (props: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label htmlFor={props.htmlFor}>{props.label}</Label>
      <Input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={cn(props.className, "w-full")}
        autoComplete={props.autoComplete}
        required
      />
      {props.children}
    </div>
  );
};

export default FormInputComponent;

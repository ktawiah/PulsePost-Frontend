"use client";

import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default function Home() {
  return <Button onClick={() => toast.error("toast working")}>Click me</Button>;
}

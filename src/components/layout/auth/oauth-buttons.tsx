"use client";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const frontendUrl = process.env.NEXT_PUBLIC_HOST;

const OAuthButtons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  axios.interceptors.request.use((config) => {
    if (config.url === "your_url_here") {
      config.withCredentials = true;
    }

    return config;
  });

  const handleClick = async (selectedProvider: string) => {
    setIsLoading(true);
    const redirectUri =
      selectedProvider === "github"
        ? `${frontendUrl}/auth/github/`
        : `${frontendUrl}/auth/google/`;
    await axios
      .get(
        `${backendUrl}/accounts/oauth/${selectedProvider}/?redirect_uri=${redirectUri}`,
        {
          headers: {
            Accept: "application/json",
          },
          withCredentials: true,
        }
      )
      .then(async (response) => {
        setIsLoading(false);
        if (response.status == 200) {
          window.location.replace(response.data.authorization_url);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("Auth failed to initialize", {
          description:
            "An error occurred while initializing oauth. Please try again.",
        });
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row lg:gap-4">
      <Button
        className="w-full flex gap-2"
        variant={"secondary"}
        type="button"
        onClick={() => handleClick("google-oauth2")}
        disabled={isLoading}
      >
        {isLoading && <Spinner />}
        <FcGoogle size={28} />
        <p>Continue with Google</p>
      </Button>
      <Button
        className="w-full flex gap-2"
        variant={"secondary"}
        type="button"
        onClick={() => handleClick("github")}
        disabled={isLoading}
      >
        {isLoading && <Spinner />}
        <FaGithub size={28} />
        <p>Continue with Github</p>
      </Button>
    </div>
  );
};

export default OAuthButtons;

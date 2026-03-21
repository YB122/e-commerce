import React from "react";
import axios from "axios";
import { toast } from "sonner";
export default async function LoginFetch(
  userData: UserLogin,
): Promise<boolean> {
  const toastId = toast.loading("Processing your request...", {
    position: "top-center",
  });

  try {
    const res = await axios.post(
      "https://nti-ecommerce.vercel.app/api/v1/auth/signIn",
      userData,
    );
    toast.success("Welcome Back", {
      position: "top-center",
      id: toastId,
    });

    localStorage.setItem("token", res.data.token);
    return true;
  } catch (error) {
    toast.error("Failed Login", {
      position: "top-center",
      id: toastId,
    });

    return false;
  }
}

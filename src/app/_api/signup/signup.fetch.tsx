import axios from "axios";
import { toast } from "sonner";

export default async function SignupFetch(
  userData: UserRegistration,
): Promise<boolean> {
  const toastId = toast.loading("Processing your request...", {
    position: "top-center",
  });
  console.log(userData, "line10");

  try {
    const res = await axios.post(
      "https://nti-ecommerce.vercel.app/api/v1/auth/signUp",
      userData,
    );
    console.log(res, "line16");

    toast.success(`${userData.name} has been added`, {
      position: "top-center",
      id: toastId,
    });

    return true;
  } catch (error) {
    toast.error("Failed to create user", {
      position: "top-center",
      id: toastId,
    });

    return false;
  }
}

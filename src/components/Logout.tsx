"use client";

import { useClerk } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      await signOut();
      router.push("/"); // Redirect to login page
    };

    logout();
  }, [signOut, router]);

  return (
    <div>Logging out...</div> // Optional loading text while logging out
  );
};

export default Logout;

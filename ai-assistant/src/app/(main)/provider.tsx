"use client";

import React, { useEffect } from "react";
import Header from "./_components/Header";

import { GetAuthUserData } from "@/services/GlobalAPI";
import { useRouter } from "next/navigation";

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();

  const CheckAuth = async () => {
    const token = localStorage.getItem("user_token");
    const user = token ? await GetAuthUserData(token) : null;

    if (!user?.email) {
      router.push("/sign-in");
    }

    // try {
    //   const user = await GetAuthUserData(token);
    //   if (!user) {
    //     router.push("/login");
    //   }
    // } catch (error) {
    //   router.push("/login");
    // }
  };

  useEffect(() => {
    CheckAuth();
  }, []);
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider;

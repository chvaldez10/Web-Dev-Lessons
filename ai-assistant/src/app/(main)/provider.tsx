"use client";

import React, { useEffect, useContext } from "react";
import Header from "./_components/Header";

import { GetAuthUserData } from "@/services/GlobalAPI";
import { useRouter } from "next/navigation";
import { useConvex } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { AuthContext } from "@/context/AuthContext";

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const convex = useConvex();

  const { user, setUser } = useContext(AuthContext);

  const CheckAuth = async () => {
    const token = localStorage.getItem("user_token");
    const user = token ? await GetAuthUserData(token) : null;

    if (!user?.email) {
      router.push("/sign-in");
    }

    try {
      const result = await convex.query(api.users.GetUser, {
        email: user?.email,
      });
      setUser(result);
    } catch (error) {
      console.log(error);
      router.push("/sign-in");
    }
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

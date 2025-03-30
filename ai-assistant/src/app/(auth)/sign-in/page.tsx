"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGoogleLogin } from "@react-oauth/google";
import { GetAuthUserData } from "@/services/GlobalAPI";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Save the token to local storage
      if (typeof window !== "undefined") {
        localStorage.setItem("user_token", tokenResponse.access_token);
      }

      // Get the user info
      const userInfo = await GetAuthUserData(tokenResponse.access_token);
      console.log(userInfo);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="mb-8">
        <Image
          src="/logos/logo.svg"
          alt="logo"
          width={120}
          height={120}
          priority
        />
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Sign in
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>

          <div className="mt-4 relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => googleLogin()}
              className="flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
              Google
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2">
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a
              href="/sign-up"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Sign up
            </a>
          </div>
          <div className="text-center text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <a href="/terms" className="underline hover:text-gray-800">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-gray-800">
              Privacy Policy
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

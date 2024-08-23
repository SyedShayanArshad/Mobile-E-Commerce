"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();

  const handleSignIn = async (provider) => {
    signIn(provider, { callbackUrl: "/Home" });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
     await signIn("credentials", {
      email,
      password,
      callbackUrl: "/Home",
    });
  };

  return (
    <div className="flex h-screen md:flex-row flex-col">
      {/* Login Container */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-4 bg-gray-100">
        <img src="/images/logoVector.png" alt="Logo" className="mb-4" />
        <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
        <form className="flex flex-col gap-4" onSubmit={SubmitHandler}>
          <h2 className="text-xl font-semibold">Sign In Now</h2>
          <label className="block">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              value={email}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Password</span>
            <input
              type="password"
              value={password}
              required
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
        <div className="text-center">
          <h2 className="text-xl font-semibold">Or Sign In Using</h2>
          {!session && (
            <div className="flex items-center justify-center">
              <img
                src="/images/google.png"
                alt="Sign in with Google"
                onClick={() => handleSignIn("google")}
                className="w-9 h-9 cursor-pointer transition-transform transform hover:scale-105"
              />
              <img
                src="/images/github.png"
                alt="Sign in with GitHub"
                onClick={() => handleSignIn("github")}
                className="w-14 h-14 cursor-pointer transition-transform transform hover:scale-105"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 bg-[#211c24] px-10 flex items-center justify-center">
        <img
          src="/images/hero_1.png"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function Home() {
  const { status } = useSession();
  console.log(status)
  useEffect(() => {
    if (status === "authenticated") {
      redirect("/Home");
    } else if (status === "unauthenticated") {
      redirect("/Login");
    }    
  }, [status]);
  return null;
}

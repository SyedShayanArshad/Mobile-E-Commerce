"use client";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreProvider from "@/app/StoreProvider";
import FetchProducts from "@/components/FetchProducts";

export default function UserContent({ children }) {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        children // Render the login page or other content here
      ) : (
        <StoreProvider>
          <FetchProducts />
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      )}
    </>
  );
}

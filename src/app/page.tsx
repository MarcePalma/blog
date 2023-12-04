
import ListaDeBlogs from "@/components/ListaDeBlogs";
import HeroSection from "@/components/hero-section";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import React from "react"
import UserStorage from "@/components/UserStorage";



export default function Home() {
  return (
    <UserStorage>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Header />
        <section className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <ListaDeBlogs />
        </section>
        <Footer />
      </main>
    </UserStorage>

  );
}

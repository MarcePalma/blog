import Link from "next/link";
import ListaDeBlogs from "@/components/ListaDeBlogs";
import HeroSection from "@/components/hero-section";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import React, { useEffect, useContext } from "react"
import { UserContext } from "@/context/UserContext";


export default function Home() {
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    const usuarioAlmacenado = localStorage.getItem('usuario');
    if (usuarioAlmacenado) {
      const { token, nombre, expiracion } = JSON.parse(usuarioAlmacenado);
      if (expiracion > Date.now()) {
        setUser({ token, nombre });
      } else {
        console.log('El token ha expirado');
      }
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Header />
      <section className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ListaDeBlogs />
      </section>
      <Footer />
    </main>
  );
}

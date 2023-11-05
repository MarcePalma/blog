import Link from "next/link";
import ListaDeBlogs from "@/components/ListaDeBlogs";
import HeroSection from "@/components/hero-section";
import Header from "@/components/header";
import Footer from "@/components/Footer";


export default function Home() {



  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Header />
      <section className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <ListaDeBlogs/>
      </section>
      <Footer/>
    </main>
  );
}

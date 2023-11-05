import Link from "next/link";
import ListaDeBlogs from "@/components/ListaDeBlogs";


export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/auth/registrarse">Ir a registrarse</Link>

      <h2 className="text-emerald-300	">Blogs de Roberto</h2>

      <ListaDeBlogs/>
    </main>
  );
}

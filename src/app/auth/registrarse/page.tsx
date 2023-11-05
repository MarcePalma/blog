import FormularioDeRegistro from "@/components/FormularioDeRegistro";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <FormularioDeRegistro />
      <Link href="https://blog-blxphemsh-marcepalma.vercel.app/auth/login">
        <button> Ya tienes una cuenta? Click Aqui!</button>
      </Link>

    </main>
  );
}

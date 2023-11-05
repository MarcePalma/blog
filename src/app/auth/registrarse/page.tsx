import FormularioDeRegistro from "@/components/FormularioDeRegistro";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <FormularioDeRegistro />
      <Link href="http://localhost:3000/auth/login">
        <button> Ya tienes una cuenta? Click Aqui!</button>
      </Link>

    </main>
  );
}

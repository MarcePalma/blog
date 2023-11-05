"use client"

import { FormEvent, useRef } from "react";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";

export default function FormularioDeLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  async function mandarDatosDeLogin(evento: FormEvent) {
    evento.preventDefault();

    const datosAEnviar = {
      //@ts-ignore
      email: emailRef.current?.value,
      //@ts-ignore
      password: passwordRef.current?.value,
    };

    console.log(datosAEnviar);

    const respuesta = await fetch("https://localhost:3000/api/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosAEnviar),
    });

    if (respuesta.status !== 200) {
      const error = await respuesta.text();
      alert(error);
      return;
    }

    const { token } = await respuesta.json();

    // Guardar el token en el contexto de usuario
    setUser({ token });

    // Redirigir al usuario a la página de perfil o a donde desees
    router.push("/perfil");
  }

  return (
    <>
      <form onSubmit={mandarDatosDeLogin} className="text-black">
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Contraseña" />
        <input type="submit" className="text-white" value="Iniciar sesión" />
      </form>
    </>
  );
}

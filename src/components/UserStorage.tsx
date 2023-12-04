"use client"
import React, { useEffect, useContext, ReactNode } from "react"
import { UserContext } from "@/context/UserContext"

interface UserStorageProps {
    children: React.ReactNode;
}

const UserStorage: React.FC<UserStorageProps> = ({ children }) => {
    const { setUser } = useContext(UserContext)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const usuarioAlmacenado = localStorage.getItem('usuario');
                console.log('Datos almacenados en localStorage:', usuarioAlmacenado);

                if (usuarioAlmacenado) {
                    const { token, nombre, expiracion } = JSON.parse(usuarioAlmacenado);
                    console.log('Datos de usuario analizados:', { token, nombre, expiracion });

                    if (expiracion > Date.now()) {
                        setUser({ token, nombre });
                    } else {
                        console.log('El token ha expirado');
                    }
                } else {
                    console.log('No hay datos de usuario almacenados en localStorage');
                }
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            }
        };

        fetchUser();
    }, [setUser]);


    return <>{children}</>;
};

export default UserStorage;
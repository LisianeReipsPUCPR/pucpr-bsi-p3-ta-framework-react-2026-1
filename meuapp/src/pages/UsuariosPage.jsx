import { use, useEffect, useState } from "react";

export default function UsuariosPage() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarUsuarios() {
            try{
                const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
                const dados = await resposta.json();
                setUsuarios(dados);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false);
            }
        }
        buscarUsuarios();
    }, []);

    return (
        <div>
            <h1>Lista de Usuários</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    {usuarios.map((usuario) => (
                        <li key={usuario.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                            <h2>{usuario.name}</h2>
                            <p>{usuario.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
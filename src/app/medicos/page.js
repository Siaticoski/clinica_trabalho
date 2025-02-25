"use client";
import Link from "next/link";
import styles from "./medicos.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function medicos() {
    const [medico, setmedico] = useState([]);
    const [busca, setBusca] = useState('');

    const getUfs = async () => {
        const response = await fetch('https://api-clinica-2a.onrender.com/medicos');
        if (!response.ok) {
            throw new Error('erro ao buscar:' + response.statusText);
        }
        const data = await response.json();
        setmedico(data);
    };

    useEffect(() => {
        getUfs();
    }, []);

    // Filtrando os médicos com base na busca
    const medicosFiltrados = medico.filter(medicos =>
        medicos.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <section>
            <div className={styles.pesquisa}>
                <input
                    className= {styles.pes}
                    value={busca}
                    type="text"
                    placeholder="Pesquisar por médico..."
                    onChange={(ev) => setBusca(ev.target.value)}
                />
            </div>
            
            <section className={styles.tabela0}>
                <table className={styles.tabela1}>
                    <thead className={styles.tabela2}>
                        <tr className={styles.tabenome}>
                            <th className={styles.tipo}>Id</th>
                            <th className={styles.tipo}>Nome</th>
                            <th className={styles.tipo}>Telefone</th>
                            <th className={styles.tipo}>Email</th>
                            <th className={styles.tipo}>Especialidade</th>
                        </tr>
                    </thead>

                    <tbody className={styles.tabela3}>
                        {medicosFiltrados.map(medicos => (
                            <tr key={medicos.id}>
                                <td className={styles.nome}>{medicos.id}</td>
                                <td className={styles.nome}>{medicos.nome}</td>
                                <td className={styles.nome}>{medicos.telefone}</td>
                                <td className={styles.nome}>{medicos.email}</td>
                                <td className={styles.nome}>{medicos.especialidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    );
}
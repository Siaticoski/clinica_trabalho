"use client";
import Link from "next/link";
import styles from "./pacientes.module.css"
import Image from "next/image";
import { useState,useEffect } from "react";

export default function medicos() {

    const [medico, setmedico] = useState([])

    const getUfs = async () => {
        const response = await fetch('https://api-clinica-2a.onrender.com/pacientes')
        if (!response.ok){
            throw new Error('erro ao buscar:' + response.statusText);
        }
        const data = await response.json();
        setmedico(data)
    }
    useEffect(() => {
        getUfs()
    }, [])

    const [busca, setBusca] = useState('')
    

    return(

        <section>
            <div className={styles.pesquisa}>
                <input
                    className= {styles.pes}
                    value={busca}
                    type="text"
                    placeholder="Pesquisar por paciente..."
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
                        <th className={styles.tipo}>CPF</th>
                    </tr>
                </thead>

                <tbody className={styles.tabela3}>
                    {medico.map(medicos =>(
                        <tr key={medicos.id}>
                            <td className={styles.nome}>{medicos.id}</td>
                            <td className={styles.nome}>{medicos.nome}</td>
                            <td className={styles.nome}>{medicos.telefone}</td>
                            <td className={styles.nome}>{medicos.email}</td>
                            <td className={styles.nome}>{medicos.cpf}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

            </section>

        </section>
        
        
       
        
    )
}

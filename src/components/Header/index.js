"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Header() {

    const [div1, setdiv1] = useState(false)
    const [div2, setdiv2] = useState(false)
    const [div3, setdiv3] = useState(false)

    return(
        <header className={styles.cabeca}>
            
            <Image className={styles.logo} src="/images/logo_hos.jpg" alt="sim" width={80} height={80}/>

            <Link className={styles.linicial} href='/'>Home</Link>

            <div className={styles.links} onMouseLeave={() => setdiv1(false)}>
                <p className={styles.lnome} onMouseEnter={() => setdiv1(true)}>Médicos</p>
                
                {div1 && (<div className={styles.arruma}>
                    <Link className={styles.a} href='/medicos'>Listar</Link>
                    <Link className={styles.a} href='/medicos'>Adicionar</Link>
                    <Link className={styles.a} href='/medicos'>Editar</Link>
                    <Link className={styles.a} href='/medicos'>Excluir</Link>
                </div>)}
            </div>

            <div className={styles.links} onMouseLeave={() => setdiv2(false)}>
                <p className={styles.lnome} onMouseEnter={() => setdiv2(true)}>Pacientes</p>
                
                {div2 && (<div className={styles.arruma}>
                    <Link className={styles.a} href='/pacientes'>Listar</Link>
                    <Link className={styles.a} href='/pacientes'>Adicionar</Link>
                    <Link className={styles.a} href='/pacientes'>Editar</Link>
                    <Link className={styles.a} href='/pacientes'>Excluir</Link>
                </div>)}
            </div>

            <div className={styles.links} onMouseLeave={() => setdiv3(false)}>
                <p className={styles.lnome} onMouseEnter={() => setdiv3(true)}>Consulta</p>
                
                {div3 && (<div className={styles.arruma}>
                    <Link className={styles.a} href='/consulta'>Listar</Link>
                    <Link className={styles.a} href='/consulta'>Adicionar</Link>
                    <Link className={styles.a} href='/consulta'>Editar</Link>
                    <Link className={styles.a} href='/consulta'>Excluir</Link>
                </div>)}
            </div>

        </header>
    )
}
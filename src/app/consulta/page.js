'use client'
import { useState, useEffect } from "react";
import styles from "./consulta.module.css";

export default function Consultas() {
    const [divPrincipal, setDivPrincipal] = useState(true);
    const [botao1, setBotao1] = useState(false);
    const [botao2, setBotao2] = useState(false);
    
    const [consulta, setConsulta] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    
    const [filtroMedico, setFiltroMedico] = useState("");
    const [filtroPaciente, setFiltroPaciente] = useState("");

    useEffect(() => {
        const getApi = async () => {
            try {
                const responseConsultas = await fetch('https://api-clinica-2a.onrender.com/consultas');
                const responseMedicos = await fetch('https://api-clinica-2a.onrender.com/medicos');
                const responsePacientes = await fetch('https://api-clinica-2a.onrender.com/pacientes');
                
                if (!responseConsultas.ok || !responseMedicos.ok || !responsePacientes.ok) 
                    throw new Error('Erro ao buscar dados');
                
                const dataConsultas = await responseConsultas.json();
                const dataMedicos = await responseMedicos.json();
                const dataPacientes = await responsePacientes.json();
                
                setConsulta(dataConsultas);
                setMedicos(dataMedicos);
                setPacientes(dataPacientes);
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        };
        getApi();
    }, []);

    const medicosFiltrados = filtroMedico.trim() 
        ? medicos.filter(medico => medico.nome?.toLowerCase().includes(filtroMedico.toLowerCase())) 
        : medicos;
    
    const pacientesFiltrados = filtroPaciente.trim() 
        ? pacientes.filter(paciente => paciente.nome?.toLowerCase().includes(filtroPaciente.toLowerCase())) 
        : pacientes;
    
    const mudarDiv = (numero) => {
        setDivPrincipal(numero === 3);
        setBotao1(numero === 1);
        setBotao2(numero === 2);
    };

    return (
        <section>


            <div className={styles.divButao}>
                <button className={styles.butao} onClick={() => mudarDiv(1)}>Buscar médico</button>
                <button className={styles.butao} onClick={() => mudarDiv(2)}>Buscar paciente</button>
                <button className={styles.butao} onClick={() => mudarDiv(3)}>Voltar</button>
            </div>


            {divPrincipal && (
                <div className={styles.tabela0}>
                    <table className={styles.tabela1}>
                        <thead className={styles.tabela2}>
                            <tr className={styles.tabenome}>
                                <th className={styles.tipo}>ID</th>
                                <th className={styles.tipo}>Especialidade</th>
                                <th className={styles.tipo}>Médico</th>
                                <th className={styles.tipo}>Paciente</th>
                                <th className={styles.tipo}>Tipo</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tabela3}>
                            {consulta.map(c => (
                                <tr key={c.id}>
                                    <td className={styles.nome}>{c.id}</td>
                                    <td className={styles.nome}>{c.especialidade}</td>
                                    <td className={styles.nome}>{c.medico}</td>
                                    <td className={styles.nome}>{c.paciente}</td>
                                    <td className={styles.nome}>{c.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}





            {botao1 && (

                <section className={styles.lis_medi}>

                    <div className={styles.tabe_medi}>
                        <p className={styles.text}>Buscar por médico</p>
                        
                        <input className={styles.pes_medi} type="text" value={filtroMedico} onChange={(e) => setFiltroMedico(e.target.value)} />

                        <table className={styles.tabe_medi}>
                            <tbody>
                                {medicosFiltrados.map(medico => (
                                    <tr key={medico.id}>
                                        <td className={styles.lista}>{medico.nome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                
            )}





            {botao2 && (


                <section className={styles.lis_paci}>

                    <div className={styles.tabe_paci}>
                        <p className={styles.text} >Buscar por paciente</p>
                        
                        <input className={styles.pes_paci} type="text" value={filtroPaciente} onChange={(e) => setFiltroPaciente(e.target.value)} />

                        <table className={styles.tabe_paci}>
                            <tbody>
                                {pacientesFiltrados.map(paciente => (
                                    <tr key={paciente.id}>
                                        <td className={styles.lista2}>{paciente.nome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                
            )}
        </section>
    );
}

import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.inicio}>
      <h1>Ben-Vindo ao Clínica Boa Saúde</h1>
      <Image className={styles.img} src="/images/logo_hos.jpg" alt= "star_rail" width={300} height={300} />

    </div>
  );
}
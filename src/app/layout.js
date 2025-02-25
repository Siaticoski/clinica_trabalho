import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Clinica",
  description: "SUS",
  charset: 'UTF-8',
  author: 'Dr.Caio Franco Siaticoski',
  keywords:'clinica,medico,paciente',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
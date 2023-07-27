import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "QuestiGO",
  description: "Personal Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex flex-col items-center bg-gradient-to-t from-cyan-500 to-blue-500 min-h-screen`}
      >
        <header>
          <h1 className="text-3xl m-5">
            <a href="/">QuestiGO</a>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}

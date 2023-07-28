import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ClueAsk",
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
        className={`${montserrat.className} bg-white-steam min-h-screen px-10`}
      >
        <header className="mb-10">
          <h1 className="text-3xl my-5 text-black-oil font-black">
            <a href="/">ClueAsk</a>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
